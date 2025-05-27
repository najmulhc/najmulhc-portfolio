import {
  IsString,
  IsUrl,
  MinLength,
  IsOptional,
  IsArray,
} from "class-validator";

export class CreateExperienceDto {
  @IsString()
  @MinLength(3)
  jobTitle: string;

  @IsString()
  @MinLength(2)
  companyName: string;

  @IsUrl()
  companyLogoUrl: string;

  @IsString()
  startDate: string; // ISO date string

  @IsString()
  @IsOptional()
  endDate?: string;

  @IsString()
  location: string;

  @IsString()
  @MinLength(50)
  description: string;

  @IsArray()
  @IsString({ each: true })
  keyAchievements: string[];
}
