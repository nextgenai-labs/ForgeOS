import { Pool, type PoolConfig } from "pg";

import type { Embedding } from "../types/Embedding";
import type { SearchResult } from "../types/SearchResult";

import type { VectorStore } from "./VectorStore";

/**
 * PostgreSQL + pgvector implementation of ForgeOS VectorStore.
 *
 * Features:
 * - Persistent storage
 * - Native pgvector cosine similarity search
 * - JSONB metadata
 * - Namespace filtering
 * - HNSW vector indexing
 */
export class PgVectorStore implements VectorStore {
  private readonly pool: Pool;

  /**
   * Prevents recreating schema on every query.
   */
  private initialized = false;

  constructor(config: PoolConfig = {}) {
    this.pool = new Pool({
      host: process.env.FORGEOS_PG_HOST ?? "localhost",

      port: Number(process.env.FORGEOS_PG_PORT ?? 5432),

      user: process.env.FORGEOS_PG_USER ?? "forgeos",

      password: process.env.FORGEOS_PG_PASSWORD ?? "forgeos",

      database: process.env.FORGEOS_PG_DATABASE ?? "forgeos",

      ...config,
    });
  }

  /**
   * Initializes the database once.
   */
  private async connect(): Promise<void> {
    if (this.initialized) {
      return;
    }

    try {
      await this.pool.query("SELECT 1");

      await this.createSchema();

      this.initialized = true;
    } catch (error) {
      throw new Error(`Failed to initialize PgVectorStore: ${error}`);
    }
  }

  /**
   * Creates database schema.
   */
  private async createSchema(): Promise<void> {
    await this.pool.query(`

            CREATE EXTENSION IF NOT EXISTS vector;

            CREATE TABLE IF NOT EXISTS embeddings (

                id TEXT PRIMARY KEY,

                text TEXT NOT NULL,

                namespace TEXT,

                metadata JSONB,

                vector VECTOR(768)

            );

            CREATE INDEX IF NOT EXISTS
            idx_embeddings_namespace
            ON embeddings(namespace);

            CREATE INDEX IF NOT EXISTS
            idx_embeddings_metadata
            ON embeddings
            USING GIN(metadata);

            CREATE INDEX IF NOT EXISTS
            idx_embeddings_vector
            ON embeddings
            USING hnsw (vector vector_cosine_ops);

        `);
  }

  /**
   * Stores or updates an embedding.
   */
  async add(embedding: Embedding): Promise<void> {
    await this.connect();

    try {
      await this.pool.query(
        `
                INSERT INTO embeddings (

                    id,
                    text,
                    namespace,
                    metadata,
                    vector

                )

                VALUES (

                    $1,
                    $2,
                    $3,
                    $4,
                    $5::vector

                )

                ON CONFLICT (id)

                DO UPDATE SET

                    text = EXCLUDED.text,

                    namespace = EXCLUDED.namespace,

                    metadata = EXCLUDED.metadata,

                    vector = EXCLUDED.vector
                `,

        [
          embedding.id,

          embedding.text,

          embedding.namespace ?? null,

          embedding.metadata ? JSON.stringify(embedding.metadata) : null,

          `[${embedding.vector.join(",")}]`,
        ],
      );
    } catch (error) {
      throw new Error(`Failed to add embedding: ${error}`);
    }
  }

  /**
   * Removes one embedding.
   */
  async remove(id: string): Promise<boolean> {
    await this.connect();

    try {
      const result = await this.pool.query(
        `
                DELETE FROM embeddings
                WHERE id = $1
                `,

        [id],
      );

      return (result.rowCount ?? 0) > 0;
    } catch (error) {
      throw new Error(`Failed to remove embedding: ${error}`);
    }
  }

  /**
   * Removes every embedding.
   */
  async clear(): Promise<void> {
    await this.connect();

    try {
      await this.pool.query(
        `
                TRUNCATE TABLE embeddings;
                `,
      );
    } catch (error) {
      throw new Error(`Failed to clear embeddings: ${error}`);
    }
  }

  /**
   * Performs semantic similarity search.
   */
  async search(
    vector: number[],

    limit = 5,

    minScore = 0,

    metadata?: Record<string, unknown>,

    namespace?: string,
  ): Promise<SearchResult[]> {
    await this.connect();

    try {
      const values: unknown[] = [
        `[${vector.join(",")}]`,
        namespace ?? null,
        metadata ? JSON.stringify(metadata) : null,
        limit,
      ];

      const result = await this.pool.query(
        `
                SELECT

                    id,

                    text,

                    namespace,
                    metadata,

                    vector::text AS vector,

                    1 - (vector <=> $1::vector) AS score

                FROM embeddings

                WHERE

                    ($2::text IS NULL OR namespace = $2)

                    AND

                    ($3::jsonb IS NULL OR metadata @> $3)

                ORDER BY

                    vector <=> $1::vector

                LIMIT $4
                `,

        values,
      );

      const results: SearchResult[] = [];

      for (const row of result.rows) {
        const score = Number(row.score);

        if (score < minScore) {
          continue;
        }

        results.push({
          embedding: {
            id: row.id,

            text: row.text,

            namespace: row.namespace ?? undefined,

            metadata: row.metadata ?? undefined,

            vector: row.vector.slice(1, -1).split(",").map(Number),
          },

          score,
        });
      }

      return results;
    } catch (error) {
      throw new Error(`Failed to search embeddings: ${error}`);
    }
  }

  /**
   * Closes the PostgreSQL connection pool.
   */
  async close(): Promise<void> {
    try {
      await this.pool.end();
    } catch (error) {
      throw new Error(`Failed to close PostgreSQL pool: ${error}`);
    }
  }

  /**
   * Returns whether initialization has completed.
   */
  isInitialized(): boolean {
    return this.initialized;
  }
}
