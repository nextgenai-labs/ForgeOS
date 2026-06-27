import type { MemoryRecord } from "../types/MemoryRecord";

export interface MemoryProvider {

    save(
        records: MemoryRecord[]
    ): Promise<void>;

    load(): Promise<MemoryRecord[]>;

}