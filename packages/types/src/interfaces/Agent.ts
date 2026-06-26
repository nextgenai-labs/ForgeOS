export interface Agent {
  id: string;
  name: string;
  description: string;

  version: string;

  department: string;

  permissions: string[];

  enabled: boolean;

  createdAt: Date;

  updatedAt: Date;
}
