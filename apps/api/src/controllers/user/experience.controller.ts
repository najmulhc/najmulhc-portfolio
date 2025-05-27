import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { ExperienceService } from "../../services/experience.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { ExperienceListResponse } from "../../dtos/responses";

@Controller("experience")
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  @UseInterceptors(new SerializeInterceptor(ExperienceListResponse))
  async getAllExperiences() {
    const experiences = await this.experienceService.findAll();
    return { experiences };
  }
}
