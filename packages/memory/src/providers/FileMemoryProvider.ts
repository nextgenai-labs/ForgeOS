import { promises as fs } from "node:fs";
import { dirname } from "node:path";

import type { MemoryRecord } from "../types/MemoryRecord";

import type { MemoryProvider } from "./MemoryProvider";

export class FileMemoryProvider
implements MemoryProvider {

    constructor(
        private readonly filePath: string
    ) {}

    async save(
        records: MemoryRecord[]
    ): Promise<void> {

        await fs.mkdir(
            dirname(this.filePath),
            { recursive: true }
        );

        await fs.writeFile(
            this.filePath,
            JSON.stringify(records, null, 2),
            "utf8"
        );

    }

    async load(): Promise<MemoryRecord[]> {

        try {

            const data = await fs.readFile(
                this.filePath,
                "utf8"
            );

            return JSON.parse(data);

        } catch {

            return [];

        }

    }

}
