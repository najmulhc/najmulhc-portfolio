import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "../entities/project.entity";
import { ProblemSolution } from "../entities/problem-solution.entity";
import { Tech } from "../entities/tech.entity";
import {
  CreateProjectDto,
  UpdateProjectDto,
} from "../dtos/project.validation.dto";
import { TechService } from "./tech.service";

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(ProblemSolution)
    private readonly problemSolutionRepository: Repository<ProblemSolution>,
    private readonly techService: TechService
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const { techStackIds, problemsAndSolutions, ...projectData } =
      createProjectDto;

    // Create project instance
    const project = this.projectRepository.create(projectData);

    // Find and assign tech stack
    const techStack = await this.techService.findByIds(techStackIds);
    project.techStack = techStack;

    // Create and assign problem solutions
    if (problemsAndSolutions && problemsAndSolutions.length > 0) {
      const problems = problemsAndSolutions.map((ps) => {
        const problemSolution = this.problemSolutionRepository.create(ps);
        problemSolution.project = project;
        return problemSolution;
      });
      project.problemsAndSolutions = problems;
    }

    return await this.projectRepository.save(project);
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto
  ): Promise<Project> {
    const { techStackIds, problemsAndSolutions, ...projectData } =
      updateProjectDto;

    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ["techStack", "problemsAndSolutions"],
    });

    if (!project) {
      throw new NotFoundException(`Project with ID "${id}" not found`);
    }

    // Update basic project data
    Object.assign(project, projectData);

    // Update tech stack if provided
    if (techStackIds) {
      const techStack = await this.techService.findByIds(techStackIds);
      project.techStack = techStack;
    }

    // Update problem solutions if provided
    if (problemsAndSolutions) {
      // Remove existing problem solutions
      await this.problemSolutionRepository.delete({ project: { id } });

      // Create new problem solutions
      const problems = problemsAndSolutions.map((ps) => {
        const problemSolution = this.problemSolutionRepository.create(ps);
        problemSolution.project = project;
        return problemSolution;
      });
      project.problemsAndSolutions = problems;
    }

    return await this.projectRepository.save(project);
  }

  async remove(id: string): Promise<void> {
    // First delete related problem solutions
    await this.problemSolutionRepository.delete({ project: { id } });

    // Then delete the project
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID "${id}" not found`);
    }
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ["techStack", "problemsAndSolutions"],
    });

    if (!project) {
      throw new NotFoundException(`Project with ID "${id}" not found`);
    }

    return project;
  }

  async findAll(filters?: {
    techId?: string;
    type?: string;
    isAdmin?: boolean;
  }): Promise<Project[]> {
    if (filters?.isAdmin) {
      return await this.projectRepository.find({
        relations: ["techStack", "problemsAndSolutions"],
      });
    }

    const queryBuilder = this.projectRepository
      .createQueryBuilder("project")
      .leftJoinAndSelect("project.techStack", "tech")
      .leftJoinAndSelect("project.problemsAndSolutions", "problems")
      .orderBy("project.publishedAt", "DESC");

    if (filters?.techId) {
      queryBuilder.andWhere("tech.id = :techId", { techId: filters.techId });
    }

    if (filters?.type) {
      queryBuilder.andWhere("project.type = :type", { type: filters.type });
    }

    return await queryBuilder.getMany();
  }

  async findFeatured(): Promise<Project[]> {
    return await this.projectRepository.find({
      where: { isFeatured: true },
      order: { publishedAt: "DESC" },
      take: 3,
    });
  }
}
