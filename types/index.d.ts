export interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  techStack?: string[];
  githubLink: string;
  liveSiteLink?: string;
}
