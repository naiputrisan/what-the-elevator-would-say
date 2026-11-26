// What the Elevator Would Say — make.fun entry.
//
// A talking elevator, in its own voice. It weighs every passenger before
// it lets them in, and it has decided to keep that number to itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know exactly how much you weigh, and I still let you in. That's love.";

// The gate only accepts 1-120 characters of non-whitespace text on one
// line, with no trailing newline, so refuse to write anything else.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n")) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
