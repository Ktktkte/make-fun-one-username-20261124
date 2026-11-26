// One Word, One Username, One Reward — v2 entry program.
// Reads entry.txt sitting next to this script and writes it byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.txt. No dependencies, no network.
// Runs on Node 22 (plain JavaScript, no TypeScript annotations).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.txt");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// validateEntry enforces the kit gate: the entry must be exactly one word —
// 1 to 30 characters, no whitespace anywhere (no spaces, no padding, no
// trailing newline). Returns the trimmed word, or throws on any violation.
function validateEntry(raw) {
  const word = raw.trim();
  if (word.length < 1 || word.length > 30 || /\s/.test(word)) {
    throw new Error("entry.txt must hold exactly one word (1-30 characters, no spaces)");
  }
  return word;
}

const word = validateEntry(readFileSync(entryPath, "utf8"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
