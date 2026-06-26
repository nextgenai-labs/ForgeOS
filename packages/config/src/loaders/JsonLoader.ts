import { existsSync, readFileSync } from "node:fs";

export class JsonLoader {
  load(path: string): Record<string, unknown> {
    if (!existsSync(path)) {
      return {};
    }

    return JSON.parse(readFileSync(path, "utf8"));
  }
}
