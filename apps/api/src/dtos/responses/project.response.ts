import { Expose, Type } from "class-transformer";
import {
  IsString,
  IsUrl,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
} from "class-validator";

// Project List Response


export class ProjectListItemData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  shortDescription: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsUrl()
  bannerUrl: string;

  @Expose()
  @IsUrl()
  backgroundImageUrl: string;

  @Expose()
  @IsBoolean()
  isFeatured: boolean;

  @Expose()
  @IsNumber()
  publishedAt: number;
}
export class ProjectListResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ProjectListItemData)
  projects: ProjectListItemData[];
}

// Project Detail Response

export class ProblemSolutionData {
  @Expose()
  @IsString()
  problem: string;

  @Expose()
  @IsString()
  solution: string;
}

export class ProjectTechData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsUrl()
  logoUrl: string;

  @Expose()
  @IsString()
  color: string;

  @Expose()
  @IsString()
  type: string;
}

export class ProjectDetailData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  shortDescription: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsUrl()
  bannerUrl: string;

  @Expose()
  @IsUrl()
  backgroundImageUrl: string;

  @Expose()
  @IsUrl()
  githubUrl?: string;

  @Expose()
  @IsUrl()
  liveDemoUrl?: string;

  @Expose()
  @IsArray()
  @IsString({ each: true })
  features: string[];

  @Expose()
  @IsString()
  technicalOverview?: string;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ProblemSolutionData)
  problemsAndSolutions: ProblemSolutionData[];

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ProjectTechData)
  techStack: ProjectTechData[];
}

export class ProjectDetailResponse {
  @Expose()
  @ValidateNested()
  @Type(() => ProjectDetailData)
  project: ProjectDetailData;
}
