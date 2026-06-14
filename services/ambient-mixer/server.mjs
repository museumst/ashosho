import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { createReadStream } from "node:fs";
import { mkdir, readdir, rename, stat, unlink } from "node:fs/promises";
import { createServer } from "node:http";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const PORT = Number(process.env.PORT || 3000);
const MIX_DURATION_SECONDS = Number(process.env.MIX_DURATION_SECONDS || 600);
const CACHE_DIR = process.env.CACHE_DIR || "/tmp/ambient-mixer";
const MAX_CACHE_FILES = Number(process.env.MAX_CACHE_FILES || 30);
const MAX_BODY_BYTES = 16 * 1024;
const ASSET_REPO_REF = "ce01be2fd08a46e424020da8179e93ec9c489dda";
const SOUND_BASE_URL = `https://cdn.jsdelivr.net/gh/museumst/worrystone-assets@${ASSET_REPO_REF}/sound`;
const ALLOWED_ORIGINS = new Set([
  "https://grayrockclub.com",
  "http://grayrockclub.com",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);
const SOUND_IDS = [
  "rain",
  "wind",
  "fire",
  "bugs",
  "birds",
  "waves",
  "cafe",
  "walk",
  "smallriver",
];
const activeMixes = new Map();

export function normalizeMix(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("mix must be an object");
  }

  const mix = {};
  for (const soundId of SOUND_IDS) {
    const rawValue = Number(input[soundId] || 0);
    if (!Number.isFinite(rawValue)) {
      throw new Error(`${soundId} must be a number`);
    }
    const level = Math.round(Math.min(1, Math.max(0, rawValue)) * 100) / 100;
    if (level > 0) mix[soundId] = level;
  }

  if (Object.keys(mix).length === 0) {
    throw new Error("at least one sound level must be greater than zero");
  }

  return mix;
}

export function mixKey(mix) {
  return createHash("sha256")
    .update(JSON.stringify(mix))
    .digest("hex")
    .slice(0, 20);
}

export function mixFromSearchParams(searchParams) {
  return normalizeMix(
    Object.fromEntries(
      SOUND_IDS
        .filter((soundId) => searchParams.has(soundId))
        .map((soundId) => [soundId, searchParams.get(soundId)]),
    ),
  );
}

export function parseRange(rangeHeader, size) {
  if (!rangeHeader) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match) return null;

  let start;
  let end;
  if (match[1] === "" && match[2] !== "") {
    const suffixLength = Number(match[2]);
    if (!Number.isInteger(suffixLength) || suffixLength <= 0) return null;
    start = Math.max(0, size - suffixLength);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] === "" ? size - 1 : Number(match[2]);
  }

  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start || start >= size) {
    return null;
  }

  return { start, end: Math.min(end, size - 1) };
}

function corsOrigin(request) {
  const origin = request.headers.origin;
  return origin && ALLOWED_ORIGINS.has(origin) ? origin : null;
}

function setCorsHeaders(request, response) {
  const origin = corsOrigin(request);
  if (origin) {
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
  }
  response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(request, response, statusCode, body) {
  setCorsHeaders(request, response);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) throw new Error("request body is too large");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function ffmpegArguments(mix, outputPath) {
  const entries = Object.entries(mix);
  const args = ["-hide_banner", "-loglevel", "error", "-y"];

  for (const [soundId] of entries) {
    args.push("-stream_loop", "-1", "-i", `${SOUND_BASE_URL}/${soundId}.mp3`);
  }

  const filters = entries.map(([, level], index) => `[${index}:a]volume=${level}[a${index}]`);
  const inputs = entries.map((_, index) => `[a${index}]`).join("");
  filters.push(
    `${inputs}amix=inputs=${entries.length}:duration=longest:dropout_transition=0:normalize=0,alimiter=limit=0.95:attack=5:release=50[out]`,
  );

  args.push(
    "-filter_complex",
    filters.join(";"),
    "-map",
    "[out]",
    "-t",
    String(MIX_DURATION_SECONDS),
    "-vn",
    "-c:a",
    "libmp3lame",
    "-b:a",
    "160k",
    "-ar",
    "44100",
    "-ac",
    "2",
    outputPath,
  );

  return args;
}

async function trimCache() {
  const names = (await readdir(CACHE_DIR)).filter((name) => name.endsWith(".mp3"));
  if (names.length <= MAX_CACHE_FILES) return;

  const files = await Promise.all(
    names.map(async (name) => {
      const path = join(CACHE_DIR, name);
      return { path, mtimeMs: (await stat(path)).mtimeMs };
    }),
  );
  files.sort((left, right) => left.mtimeMs - right.mtimeMs);
  await Promise.all(files.slice(0, files.length - MAX_CACHE_FILES).map((file) => unlink(file.path)));
}

async function generateMix(mix, key) {
  const outputPath = join(CACHE_DIR, `${key}.mp3`);
  try {
    await stat(outputPath);
    return outputPath;
  } catch {}

  if (activeMixes.has(key)) return activeMixes.get(key);

  const generation = (async () => {
    const temporaryPath = join(CACHE_DIR, `${key}.${Date.now()}.tmp.mp3`);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn("ffmpeg", ffmpegArguments(mix, temporaryPath), {
        stdio: ["ignore", "ignore", "pipe"],
      });
      let stderr = "";
      ffmpeg.stderr.on("data", (chunk) => {
        stderr = `${stderr}${chunk}`.slice(-4000);
      });
      ffmpeg.once("error", reject);
      ffmpeg.once("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(stderr || `ffmpeg exited with code ${code}`));
        }
      });
    });
    await rename(temporaryPath, outputPath);
    trimCache().catch(() => {});
    return outputPath;
  })();

  activeMixes.set(key, generation);
  try {
    return await generation;
  } finally {
    activeMixes.delete(key);
  }
}

function publicBaseUrl(request) {
  if (process.env.PUBLIC_BASE_URL) return process.env.PUBLIC_BASE_URL.replace(/\/$/, "");
  const protocol = request.headers["x-forwarded-proto"] || "http";
  return `${protocol}://${request.headers.host}`;
}

async function serveAudio(request, response, key) {
  if (!/^[a-f0-9]{20}$/.test(key)) {
    sendJson(request, response, 404, { error: "mix not found" });
    return;
  }

  const path = join(CACHE_DIR, `${key}.mp3`);
  let metadata;
  try {
    metadata = await stat(path);
  } catch {
    sendJson(request, response, 404, { error: "mix not found" });
    return;
  }

  const range = parseRange(request.headers.range, metadata.size);
  const headers = {
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=86400, immutable",
    "Content-Type": "audio/mpeg",
  };
  setCorsHeaders(request, response);

  if (request.headers.range && !range) {
    response.writeHead(416, {
      ...headers,
      "Content-Range": `bytes */${metadata.size}`,
    });
    response.end();
    return;
  }

  if (range) {
    response.writeHead(206, {
      ...headers,
      "Content-Length": range.end - range.start + 1,
      "Content-Range": `bytes ${range.start}-${range.end}/${metadata.size}`,
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    createReadStream(path, range).pipe(response);
    return;
  }

  response.writeHead(200, {
    ...headers,
    "Content-Length": metadata.size,
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(path).pipe(response);
}

export async function handleRequest(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "OPTIONS") {
    setCorsHeaders(request, response);
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(request, response, 200, {
      ok: true,
      durationSeconds: MIX_DURATION_SECONDS,
      activeMixes: activeMixes.size,
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/mix") {
    try {
      const body = await readJson(request);
      const mix = normalizeMix(body.mix || body);
      const key = mixKey(mix);
      await generateMix(mix, key);
      sendJson(request, response, 200, {
        key,
        mix,
        durationSeconds: MIX_DURATION_SECONDS,
        url: `${publicBaseUrl(request)}/mix/${key}.mp3`,
      });
    } catch (error) {
      console.error(error);
      sendJson(request, response, 400, { error: error.message || "could not create mix" });
    }
    return;
  }

  if (request.method === "GET" && url.pathname === "/mix.mp3") {
    try {
      const mix = mixFromSearchParams(url.searchParams);
      const key = mixKey(mix);
      await generateMix(mix, key);
      await serveAudio(request, response, key);
    } catch (error) {
      console.error(error);
      sendJson(request, response, 400, { error: error.message || "could not create mix" });
    }
    return;
  }

  const audioMatch = /^\/mix\/([a-f0-9]{20})\.mp3$/.exec(url.pathname);
  if ((request.method === "GET" || request.method === "HEAD") && audioMatch) {
    await serveAudio(request, response, audioMatch[1]);
    return;
  }

  sendJson(request, response, 404, { error: "not found" });
}

await mkdir(CACHE_DIR, { recursive: true });

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createServer((request, response) => {
    handleRequest(request, response).catch((error) => {
      console.error(error);
      if (!response.headersSent) {
        sendJson(request, response, 500, { error: "internal server error" });
      } else {
        response.destroy(error);
      }
    });
  }).listen(PORT, "0.0.0.0", () => {
    console.log(`ambient mixer listening on port ${PORT}`);
  });
}
