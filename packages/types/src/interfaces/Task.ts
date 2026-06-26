export interface Task {
  id: string;

  title: string;

  description: string;

  status:
    | "pending"
    | "running"
    | "completed"
    | "failed";

  assignedTo?: string;

  createdAt: Date;

  updatedAt: Date;
}