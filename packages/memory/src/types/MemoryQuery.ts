export interface MemoryQuery {

    key?: string;

    namespace?: string;

    metadata?: Record<string, unknown>;

    limit?: number;

    offset?: number;

    orderBy?:
        | "createdAt"
        | "updatedAt"
        | "key";

    order?:
        | "ASC"
        | "DESC";

}