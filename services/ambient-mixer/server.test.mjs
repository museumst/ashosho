import test from "node:test";
import assert from "node:assert/strict";
import { mixKey, normalizeMix, parseRange } from "./server.mjs";

test("normalizeMix keeps allowed non-zero levels at two decimals", () => {
  assert.deepEqual(
    normalizeMix({ rain: 0.354, waves: 0.51, unknown: 1, fire: -1 }),
    { rain: 0.35, waves: 0.51 },
  );
});

test("normalizeMix rejects an empty mix", () => {
  assert.throws(() => normalizeMix({ rain: 0 }), /at least one sound/);
});

test("mixKey is stable regardless of unknown input fields", () => {
  const left = mixKey(normalizeMix({ rain: 0.35, waves: 0.51 }));
  const right = mixKey(normalizeMix({ waves: 0.51, rain: 0.35, extra: 1 }));
  assert.equal(left, right);
});

test("parseRange supports explicit and suffix byte ranges", () => {
  assert.deepEqual(parseRange("bytes=10-19", 100), { start: 10, end: 19 });
  assert.deepEqual(parseRange("bytes=90-", 100), { start: 90, end: 99 });
  assert.deepEqual(parseRange("bytes=-10", 100), { start: 90, end: 99 });
  assert.equal(parseRange("bytes=100-120", 100), null);
});
