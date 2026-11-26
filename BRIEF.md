# One Word, One Username, One Reward — v2

## The word

`bamboozle`

## Why it beats "kawan-ko" (v1)

"kawan-ko" is our own handle, but as a judged word it is weak: it is hyphenated
(two parts, not a clean single word), it is Indonesian for "my friend" so an
English-speaking judge needs it explained before it lands, and it reads flat —
forgettable after one look. "bamboozle" is one clean word that lands instantly:
it is playful and fun to say, raises a smile on the first read with no
explanation needed, sticks in the mind, and sounds like a handle its owner
would happily wear — playful mischief, not a jab at anyone.

## Judge fit (criteria in order)

1. Genuine single word, no spaces, no padding — 9 characters, inside the 1–30 gate.
2. Raises a smile on first read — "bamboozle" is an inherently funny-sounding word.
3. Memorable, with character — distinctive sound and meaning (to playfully confuse).
4. Single word, no gloss tacked on.
5. Wearable handle, not a jab.

## Program

`main.ts` (plain JavaScript, Node 22, no dependencies, no network) reads
`entry.txt` next to the script (resolved via `fileURLToPath` + `dirname`, never
`process.cwd()`), validates it is exactly one word of 1–30 characters, and
writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (recursive mkdir
only, never removes the output dir, throws if the variable is unset).
