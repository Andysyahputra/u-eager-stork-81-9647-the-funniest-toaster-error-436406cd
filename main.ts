// The Funniest Toaster Error Message
// Writes a single deadpan toaster error line (<=120 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR 06: No bread detected. I toasted the air anyway. It turned out better than your last three slices.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
