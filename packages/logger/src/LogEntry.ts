import { LogLevel } from "./LogLevel";

export interface LogEntry {
  timestamp: Date;

  level: LogLevel;

  message: string;

  service?: string;

  agent?: string;

  context?: Record<string, unknown>;

  error?: Error;
}
