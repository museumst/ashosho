import assert from "node:assert/strict";
import text from "../apps/english-1001/practice.js";

const chapters = text.trim().split("\n\n").map((chapter) => chapter.split("\n"));
assert.deepEqual(chapters.map((chapter) => chapter.length), [100, ...Array(15).fill(60)]);

const english = new Set();
for (const [index, line] of chapters.flat().entries()) {
  const [en, ko, extra] = line.split("|");
  assert(extra === undefined && /^[A-Z].*[.!?]$/.test(en) && /[가-힣]/.test(ko), `Invalid sentence or translation at ${index + 1}`);
  const normalized = en.toLowerCase().replace(/[^a-z0-9]/g, "");
  assert(!english.has(normalized), `Repeated English sentence at ${index + 1}`);
  english.add(normalized);
}
console.log(`Checked ${english.size} sentences across ${chapters.length} chapters.`);
