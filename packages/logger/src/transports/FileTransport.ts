import { appendFileSync } from "node:fs";

import { LogEntry } from "../LogEntry";

import { DefaultFormatter } from "../formatters/DefaultFormatter";

export class FileTransport {

  private formatter = new DefaultFormatter();

  constructor(
    private file = "forgeos.log"
  ) {}

  write(entry: LogEntry): void {

    appendFileSync(
      this.file,
      this.formatter.format(entry) + "\n"
    );

  }

}
