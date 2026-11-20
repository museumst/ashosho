import fs from "node:fs";

const [csvPath, backupPath] = process.argv.slice(2);

if (!csvPath || !backupPath) {
  throw new Error("Usage: node scripts/sync-english-1001-translations.mjs /path/to/translations.csv /path/to/private-backup.json");
}

const sentences = JSON.parse(fs.readFileSync(backupPath, "utf8"));
if (!Array.isArray(sentences) || sentences.length !== 1001) {
  throw new Error("Expected 1001 source sentences.");
}

function stripWrappingQuotes(value) {
  return value.trim().replace(/^"|"$/g, "");
}

function splitTranslation(rest) {
  if (rest.startsWith('"')) {
    const quotedEnglishEnd = rest.indexOf('",');
    if (quotedEnglishEnd !== -1) {
      return stripWrappingQuotes(rest.slice(quotedEnglishEnd + 2));
    }
  }

  for (let index = 0; index < rest.length; index += 1) {
    if (rest[index] !== ",") continue;

    const sample = rest.slice(index + 1, index + 121);
    const hangulCount = (sample.match(/[가-힣]/g) || []).length;
    const latinCount = (sample.match(/[A-Za-z]/g) || []).length;

    if (hangulCount >= 2 && hangulCount * 2 >= latinCount) {
      return stripWrappingQuotes(rest.slice(index + 1));
    }
  }

  return null;
}

const rows = fs
  .readFileSync(csvPath, "utf8")
  .replace(/^\uFEFF/, "")
  .split(/\r?\n/)
  .filter(Boolean)
  .slice(1);

const translations = new Map();
for (const row of rows) {
  const match = row.match(/^(\d+),(.*)$/);
  if (!match) throw new Error(`Invalid row: ${row}`);

  const number = Number(match[1]);
  const translation = splitTranslation(match[2]);
  if (!translation) throw new Error(`Could not find Korean translation for sentence ${number}.`);
  if (translations.has(number)) throw new Error(`Duplicate sentence number: ${number}`);

  translations.set(number, translation);
}

if (translations.size !== sentences.length) {
  throw new Error(`Expected ${sentences.length} translations, received ${translations.size}.`);
}

const merged = sentences.map((sentence) => {
  const translation = translations.get(sentence.no);
  if (!translation) throw new Error(`Missing translation for sentence ${sentence.no}.`);
  return { ...sentence, ko: translation };
});

fs.writeFileSync(backupPath, `${JSON.stringify(merged, null, 2)}\n`, "utf8");
console.log(`Merged ${merged.length} Korean translations into ${backupPath}`);
