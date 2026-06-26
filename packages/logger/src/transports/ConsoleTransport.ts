import { LogEntry } from "../LogEntry";
import { DefaultFormatter } from "../formatters/DefaultFormatter";

export class ConsoleTransport {

  private formatter = new DefaultFormatter();

  write(entry: LogEntry): void {

    console.log(
      this.formatter.format(entry)
    );

  }

}
