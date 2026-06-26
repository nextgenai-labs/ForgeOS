import { LogEntry } from "./LogEntry";
import { LogLevel } from "./LogLevel";

import { ConsoleTransport } from "./transports/ConsoleTransport";

export class Logger {

  private consoleTransport = new ConsoleTransport();

  private write(
    level: LogLevel,
    message: string
  ) {

    const entry: LogEntry = {

      timestamp: new Date(),

      level,

      message

    };

    this.consoleTransport.write(entry);

  }

  trace(message: string) {

    this.write(LogLevel.TRACE, message);

  }

  debug(message: string) {

    this.write(LogLevel.DEBUG, message);

  }

  info(message: string) {

    this.write(LogLevel.INFO, message);

  }

  warn(message: string) {

    this.write(LogLevel.WARN, message);

  }

  error(message: string) {

    this.write(LogLevel.ERROR, message);

  }

  fatal(message: string) {

    this.write(LogLevel.FATAL, message);

  }

}
