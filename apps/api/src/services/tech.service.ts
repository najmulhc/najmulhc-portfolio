import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tech } from "../entities/tech.entity";
import { CreateTechDto, UpdateTechDto } from "../dtos/tech.validation.dto";

@Injectable()
export class TechService {
  constructor(
    @InjectRepository(Tech)
    private readonly techRepository: Repository<Tech>
  ) {}

  // Admin methods
  async create(createTechDto: CreateTechDto): Promise<Tech> {
    const tech = this.techRepository.create(createTechDto);
    return await this.techRepository.save(tech);
  }

  async update(id: string, updateTechDto: UpdateTechDto): Promise<Tech> {
    const tech = await this.techRepository.findOneBy({ id });
    if (!tech) {
      throw new NotFoundException(`Tech with ID "${id}" not found`);
    }

    Object.assign(tech, updateTechDto);
    return await this.techRepository.save(tech);
  }

  async remove(id: string): Promise<void> {
    const result = await this.techRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tech with ID "${id}" not found`);
    }
  }

  async findOne(id: string): Promise<Tech> {
    const tech = await this.techRepository.findOneBy({ id });
    if (!tech) {
      throw new NotFoundException(`Tech with ID "${id}" not found`);
    }
    return tech;
  }

  async findByIds(ids: string[]): Promise<Tech[]> {
    const techs = await this.techRepository.findByIds(ids);
    if (techs.length !== ids.length) {
      throw new NotFoundException("Some tech IDs were not found");
    }
    return techs;
  }

  // User methods
  async findAll(params?: {
    type?: "Language" | "Framework" | "Tool" | "Other";
    isAdmin?: boolean;
  }): Promise<Tech[]> {
    const query = this.techRepository.createQueryBuilder("tech");

    if (params?.type) {
      query.where("tech.type = :type", { type: params.type });
    }

    if (params?.isAdmin) {
      return await this.techRepository.find(); // Raw query for admin to see all fields
    }

    query.orderBy("tech.name", "ASC"); // Always order by name for consistency

    return await query.getMany();
  }

  async findFeatured(): Promise<Tech[]> {
    return await this.techRepository.find({
      where: { isFeatured: true },
      order: { name: "ASC" },
    });
  }

  async findByType(
    type: "Language" | "Framework" | "Tool" | "Other"
  ): Promise<Tech[]> {
    return await this.techRepository.find({
      where: { type },
      order: { name: "ASC" },
    });
  }
}
