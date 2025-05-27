import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { EducationService } from "../../services/education.service";
import {
  CreateEducationDto,
  CreateOnlineCourseDto,
} from "../../dtos/education.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { EducationDto, OnlineCourseDto } from "../../dtos/education.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/education")
export class AdminEducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  @UseInterceptors(new SerializeInterceptor(EducationDto))
  async createEducation(@Body() createEducationDto: CreateEducationDto) {
    return await this.educationService.createEducation(createEducationDto);
  }

  @Patch("education/:id")
  @UseInterceptors(new SerializeInterceptor(EducationDto))
  async updateEducation(
    @Param("id") id: string,
    @Body() updateEducationDto: CreateEducationDto
  ) {
    return await this.educationService.updateEducation(id, updateEducationDto);
  }

  @Delete("education/:id")
  async removeEducation(@Param("id") id: string) {
    return await this.educationService.removeEducation(id);
  }

  @Post("course")
  @UseInterceptors(new SerializeInterceptor(OnlineCourseDto))
  async createCourse(@Body() createCourseDto: CreateOnlineCourseDto) {
    return await this.educationService.createCourse(createCourseDto);
  }

  @Patch("course/:id")
  @UseInterceptors(new SerializeInterceptor(OnlineCourseDto))
  async updateCourse(
    @Param("id") id: string,
    @Body() updateCourseDto: CreateOnlineCourseDto
  ) {
    return await this.educationService.updateCourse(id, updateCourseDto);
  }

  @Delete("course/:id")
  async removeCourse(@Param("id") id: string) {
    return await this.educationService.removeCourse(id);
  }
}
