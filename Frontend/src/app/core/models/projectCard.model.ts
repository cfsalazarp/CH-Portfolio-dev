import { Block } from './block.model';
export interface Project {
    id: number;
    title: string;
    description: Block[];
    image: string;
    repo_url?: string;
    live_url?: string;
    featured?: boolean;
    technologies?: string[],
}