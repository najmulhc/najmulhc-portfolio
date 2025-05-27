import {
  IsArray,
  IsBoolean,
  IsString,
  IsUrl,
  MinLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ProblemSolutionDto } from "./project.dto";
import { TechDto } from "./tech.dto";

export class CreateProjectDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(10)
  shortDescription: string;

  @IsString()
  type: string;

  @IsUrl()
  bannerUrl?: string;

  @IsUrl()
  backgroundImageUrl?: string;

  @IsUrl()
  githubUrl?: string;

  @IsUrl()
  liveDemoUrl?: string;

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @IsString()
  technicalOverview?: string;

  @Type(() => ProblemSolutionDto)
  problemsAndSolutions: ProblemSolutionDto[];

  @IsBoolean()
  isFeatured: boolean;

  @IsArray()
  techStackIds: string[];
}

export class UpdateProjectDto extends CreateProjectDto {
  @IsString()
  id: string;
}
