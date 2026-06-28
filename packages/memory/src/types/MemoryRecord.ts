export interface MemoryRecord<
    TValue = unknown,
    TMetadata extends Record<string, unknown> = Record<string, unknown>
> {

    id: string;

    key: string;

    namespace: string;

    value: TValue;

    metadata?: TMetadata;

    createdAt: Date;

    updatedAt: Date;

}