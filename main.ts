// one-username-20261124 — writes the account's make.fun username to /output/entry.txt.
// Competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae ("One Word, One Username, One Reward").
// The entry is the entrant's own handle, one word, nothing else: "kawan-ko" (8 chars, gate 1-30).
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");

// Gate: UTF-8 text of 1 to 30 characters, not only white space.
if (text.length < 1 || text.length > 30 || text.trim().length === 0) {
  throw new Error("entry.txt must be 1-30 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, text, "utf8");

// Read back what we wrote: the grader runs the program twice and compares
// byte-identical output, so the written file must match entry.txt exactly.
const written = readFileSync(outPath, "utf8");
if (written !== text) {
  throw new Error("output does not match entry.txt");
}
