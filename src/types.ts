// Project status types
export type ProjectStatus = "active" | "completed" | "archived" | "wip";

// Project interface
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: ProjectStatus;
  category: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

// Writing/blog post interface
export interface Writing {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}

// Social link interface
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
