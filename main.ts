import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One robot pickup line: the joke grows out of being a machine.
// A firmware update changes how everything behaves — and this robot
// refuses to roll back, because the change is her.
const line =
  "Are you a firmware update? Ever since you arrived, nothing works the way it used to \u2014 and I refuse to roll back.";

// The gate only accepts 1-200 characters of non-whitespace text.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
