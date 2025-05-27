import { Expose, Type } from "class-transformer";
import { IsString, IsUrl, IsArray, ValidateNested } from "class-validator";


export class ExperienceData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  jobTitle: string;

  @Expose()
  @IsString()
  companyName: string;

  @Expose()
  @IsUrl()
  companyLogoUrl: string;

  @Expose()
  @IsString()
  startDate: string;

  @Expose()
  @IsString()
  endDate?: string;

  @Expose()
  @IsString()
  location: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsArray()
  @IsString({ each: true })
  keyAchievements: string[];
}


export class ExperienceListResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ExperienceData)
  experiences: ExperienceData[];
}
