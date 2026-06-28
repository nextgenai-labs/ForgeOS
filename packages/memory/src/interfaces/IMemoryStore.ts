import type { MemoryRecord } from "../types/MemoryRecord";
import type { MemoryQuery } from "../types/MemoryQuery";

export interface IMemoryStore {

    set(
        record: MemoryRecord
    ): Promise<void>;

    get(
        key: string
    ): Promise<MemoryRecord | undefined>;

    has(
        key: string
    ): Promise<boolean>;

    delete(
        key: string
    ): Promise<boolean>;

    clear(): Promise<void>;

    query(
        query: MemoryQuery
    ): Promise<MemoryRecord[]>;

}