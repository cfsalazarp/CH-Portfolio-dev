export interface Project {
    id: number;
    title: string;
    description: string[];
    image: string;
    repo_url?: string;
    live_url?: string;
    featured?: boolean;
    technologies?: string[],
}