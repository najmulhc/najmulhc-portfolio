import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ProjectService } from "../../services/project.service";
import {
  CreateProjectDto,
  UpdateProjectDto,
} from "../../dtos/project.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { ProjectDetailDto } from "../../dtos/project.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/projects")
@UseInterceptors(new SerializeInterceptor(ProjectDetailDto))
export class AdminProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll() {
    return await this.projectService.findAll({ isAdmin: true });
  }

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return await this.projectService.create(createProjectDto);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    return await this.projectService.update(id, updateProjectDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.projectService.remove(id);
  }
}
