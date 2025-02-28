import { Block } from "./block.model";

export interface Education {
  degree: string;
  institution: string;
  start_date: string;
  end_date: string;
  description: Block[];
}
