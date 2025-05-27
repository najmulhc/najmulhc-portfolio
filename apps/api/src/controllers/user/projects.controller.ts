import { Controller, Get, Param, Query, UseInterceptors } from "@nestjs/common";
import { ProjectService } from "../../services/project.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import {
  ProjectDetailResponse,
  ProjectListResponse,
} from "../../dtos/responses";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @UseInterceptors(new SerializeInterceptor(ProjectListResponse))
  async getAllProjects(
    @Query("tech") techId?: string,
    @Query("type") type?: string
  ) {
    const projects = await this.projectService.findAll({ techId, type });
    return { projects };
  }

  @Get(":id")
  @UseInterceptors(new SerializeInterceptor(ProjectDetailResponse))
  async getProject(@Param("id") id: string) {
    const project = await this.projectService.findOne(id);
    return { project };
  }
}
