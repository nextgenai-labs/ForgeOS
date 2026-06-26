export interface Session {
  id: string;

  userId: string;

  startedAt: Date;

  expiresAt: Date;
}