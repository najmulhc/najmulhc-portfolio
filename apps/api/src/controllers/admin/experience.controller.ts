import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ExperienceService } from "../../services/experience.service";
import { CreateExperienceDto } from "../../dtos/experience.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { ExperienceDto } from "../../dtos/experience.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/experience")
@UseInterceptors(new SerializeInterceptor(ExperienceDto))
export class AdminExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  async create(@Body() createExperienceDto: CreateExperienceDto) {
    return await this.experienceService.create(createExperienceDto);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateExperienceDto: CreateExperienceDto
  ) {
    return await this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.experienceService.remove(id);
  }
}
