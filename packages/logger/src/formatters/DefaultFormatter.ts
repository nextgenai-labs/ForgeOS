import { LogEntry } from "../LogEntry";

export class DefaultFormatter {

  format(entry: LogEntry): string {

    return `[${entry.timestamp.toISOString()}] ` +
      `[${entry.level}] ` +
      `${entry.message}`;

  }

}
