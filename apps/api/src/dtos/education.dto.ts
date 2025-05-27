export class EducationDto {
  id: string;
  institutionName: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export class OnlineCourseDto {
  id: string;
  title: string;
  provider: string;
  certificateUrl?: string;
  completionDate: string;
}
