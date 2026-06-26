export interface Workflow {
  id: string;

  name: string;

  description: string;

  tasks: string[];

  enabled: boolean;
}