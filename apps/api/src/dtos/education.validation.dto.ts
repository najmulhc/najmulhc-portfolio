import { IsString, IsUrl, MinLength, IsOptional } from "class-validator";

export class CreateEducationDto {
  @IsString()
  @MinLength(3)
  institutionName: string;

  @IsString()
  @IsOptional()
  degree?: string;

  @IsString()
  @IsOptional()
  fieldOfStudy?: string;

  @IsString()
  startDate: string;

  @IsString()
  @IsOptional()
  endDate?: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class CreateOnlineCourseDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(2)
  provider: string;

  @IsUrl()
  @IsOptional()
  certificateUrl?: string;

  @IsString()
  completionDate: string;
}
