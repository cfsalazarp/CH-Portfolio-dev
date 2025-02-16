export interface Project {
    id: number;
    title: string;
    description: string[];
    image_url: string;
    repo_url?: string;
    live_url?: string;
    featured?: boolean;
    technologies?: string[],
}