import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { EducationService } from "../../services/education.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import {
  CourseListResponse,
  EducationListResponse,
} from "../../dtos/responses";

@Controller("education")
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  @UseInterceptors(new SerializeInterceptor(EducationListResponse))
  async getAllEducation() {
    const education = await this.educationService.findAllEducation();
    return { education };
  }

  @Get("courses")
  @UseInterceptors(new SerializeInterceptor(CourseListResponse))
  async getAllCourses() {
    const courses = await this.educationService.findAllCourses();
    return { courses };
  }
}
