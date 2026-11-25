import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My grandmother said: finish what you start, even when nobody is watching — especially then.";

// One sentence of lived advice, written as a single line, UTF-8, within the 1-200 gate.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

writeEntry();
