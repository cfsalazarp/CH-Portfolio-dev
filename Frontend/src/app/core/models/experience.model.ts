import { Block } from "./block.model";

export interface Experience {
  id: number;
  role: string;
  company: string;
  start_date: string;
  end_date?: string;
  description: Block[];
  skills?: string[];
  current?: boolean;
}
