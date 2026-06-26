import { existsSync, readFileSync } from "node:fs";

export class EnvLoader {
  load(path = ".env"): Record<string, string> {
    const values: Record<string, string> = {};

    if (!existsSync(path)) {
      return values;
    }

    const lines = readFileSync(path, "utf8").split("\n");

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const index = trimmed.indexOf("=");

      if (index === -1) {
        continue;
      }

      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim();

      values[key] = value;
    }

    return values;
  }
}
