import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "feat: ship it Friday — tests pass on my machine, which is the only machine that matters. Deploying now. See you Monday, probably.";

// Guards: 1-159 chars, single line, no whitespace-only, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`ENTRY must be 1-159 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line");
}
// No trailing newline: the file must contain exactly ENTRY and nothing else.
if (ENTRY.endsWith("\n") || ENTRY.endsWith("\r")) {
  throw new Error("ENTRY must not end with a newline");
}
if (ENTRY.trim().length === 0) {
  throw new Error("ENTRY must not be whitespace-only");
}

const outDir = join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-identical.
function verifyEntry(path, expected) {
  const readBack = readFileSync(path, "utf8");
  if (readBack !== expected) {
    throw new Error("Read-back mismatch: entry.txt differs from ENTRY");
  }
  return readBack;
}

verifyEntry(outPath, ENTRY);

console.log(`Wrote ${outPath} (${ENTRY.length} characters)`);
