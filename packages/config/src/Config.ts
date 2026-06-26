import { Environment } from "./Environment";

export class Config {
  get(key: string): string | undefined {
    return Environment.get(key);
  }

  has(key: string): boolean {
    return Environment.has(key);
  }

  set(key: string, value: string): void {
    Environment.set(key, value);
  }
}
