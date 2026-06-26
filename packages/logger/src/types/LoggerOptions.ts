import { LogLevel } from "../LogLevel";

export interface LoggerOptions {
  level: LogLevel;

  service?: string;

  enableConsole?: boolean;

  enableFile?: boolean;
}
