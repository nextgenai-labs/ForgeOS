export interface MemoryRecord<
    TValue = unknown,
    TMetadata extends Record<string, unknown> = Record<string, unknown>
> {
    id: string;

    key: string;

    value: TValue;

    namespace: string;

    createdAt: Date;

    updatedAt: Date;

    metadata?: TMetadata;
}