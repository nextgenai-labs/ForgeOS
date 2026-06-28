import type { MemoryRecord } from "../types/MemoryRecord";

export abstract class BaseProvider {

    abstract save(
        record: MemoryRecord
    ): Promise<void>;

}