export interface Event {
  id: string;

  type: string;

  timestamp: Date;

  payload: unknown;
}