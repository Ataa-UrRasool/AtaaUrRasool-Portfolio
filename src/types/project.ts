export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "Full-Stack" | "Backend" | "AI" | "Frontend";
  featured?: boolean;
  features?: string[];
  highlights?: string[];
  period?: string;
}
