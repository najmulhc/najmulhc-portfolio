import { Expose, Type } from "class-transformer";
import { IsString, IsUrl, ValidateNested } from "class-validator";



export class EducationData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  institutionName: string;

  @Expose()
  @IsString()
  degree?: string;

  @Expose()
  @IsString()
  fieldOfStudy?: string;

  @Expose()
  @IsString()
  startDate: string;

  @Expose()
  @IsString()
  endDate?: string;

  @Expose()
  @IsString()
  description?: string;
}
export class EducationListResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => EducationData)
  education: EducationData[];
}


export class CourseData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  provider: string;

  @Expose()
  @IsUrl()
  certificateUrl?: string;

  @Expose()
  @IsString()
  completionDate: string;
}
export class CourseListResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => CourseData)
  courses: CourseData[];
}
