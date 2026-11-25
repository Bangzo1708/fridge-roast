// Fridge Roast: One Line, Biggest Laugh
// Entry: a one-line roast of a smart fridge, written to /output/entry.txt.
// The joke: the ice maker is absurdly slow at its one job (twenty minutes
// for six cubes) and then celebrates that mediocrity with a triumphant beep,
// as if it had just landed a rover on Mars. The turn is the gap between the
// tiny achievement and the heroic fanfare — specific to a smart fridge's
// ice maker, not a generic kitchen gag, and it dodges the obvious cracks
// about ordering groceries or watching you eat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line (109 characters, inside the 1-200 gate).
const ENTRY =
  "My fridge's ice maker takes twenty minutes to make six cubes, then beeps like it just landed a rover on Mars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Gate: the entry must be 1-200 characters of non-whitespace text.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// The entry must be a single line: no newline characters allowed.
if (/\r|\n/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${length} characters to ${outPath}`);
