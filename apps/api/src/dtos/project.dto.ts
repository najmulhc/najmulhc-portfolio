import { TechDto } from "./tech.dto";

export class ProblemSolutionDto {
  id: string;
  problem: string;
  solution: string;
}

export class ProjectBriefDto {
  id: string;
  title: string;
  shortDescription: string;
  type: string;
  bannerUrl?: string;
  backgroundImageUrl?: string;
  isFeatured: boolean;
  publishedAt: number;
}

export class ProjectDetailDto extends ProjectBriefDto {
  githubUrl?: string;
  liveDemoUrl?: string;
  features: string[];
  technicalOverview?: string;
  problemsAndSolutions: ProblemSolutionDto[];
  techStack: TechDto[];
}

export class HomeProjectDto {
  id: string;
  bannerUrl: string;
  title: string;
  description: string;
  type: string;
  isFeatured: boolean;
}
