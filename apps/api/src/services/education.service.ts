import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Education, OnlineCourse } from "../entities/education.entity";
import {
  CreateEducationDto,
  CreateOnlineCourseDto,
} from "../dtos/education.validation.dto";

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(OnlineCourse)
    private readonly onlineCourseRepository: Repository<OnlineCourse>
  ) {}

  async createEducation(
    createEducationDto: CreateEducationDto
  ): Promise<Education> {
    const education = this.educationRepository.create(createEducationDto);
    return await this.educationRepository.save(education);
  }

  async updateEducation(
    id: string,
    updateEducationDto: CreateEducationDto
  ): Promise<Education> {
    const education = await this.educationRepository.findOneBy({ id });
    if (!education) {
      throw new NotFoundException(`Education with ID "${id}" not found`);
    }

    Object.assign(education, updateEducationDto);
    return await this.educationRepository.save(education);
  }

  async removeEducation(id: string): Promise<void> {
    const result = await this.educationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Education with ID "${id}" not found`);
    }
  }

  async createCourse(
    createCourseDto: CreateOnlineCourseDto
  ): Promise<OnlineCourse> {
    const course = this.onlineCourseRepository.create(createCourseDto);
    return await this.onlineCourseRepository.save(course);
  }

  async updateCourse(
    id: string,
    updateCourseDto: CreateOnlineCourseDto
  ): Promise<OnlineCourse> {
    const course = await this.onlineCourseRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }

    Object.assign(course, updateCourseDto);
    return await this.onlineCourseRepository.save(course);
  }

  async removeCourse(id: string): Promise<void> {
    const result = await this.onlineCourseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
  }

  async findAllEducation(): Promise<Education[]> {
    return await this.educationRepository.find({
      order: { startDate: "DESC" },
    });
  }

  async findAllCourses(): Promise<OnlineCourse[]> {
    return await this.onlineCourseRepository.find({
      order: { completionDate: "DESC" },
    });
  }
}
