export class Environment {
  static get(key: string): string | undefined {
    return process.env[key];
  }

  static has(key: string): boolean {
    return process.env[key] !== undefined;
  }

  static set(key: string, value: string): void {
    process.env[key] = value;
  }
}
