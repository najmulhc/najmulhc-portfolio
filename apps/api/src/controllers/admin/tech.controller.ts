import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { TechService } from "../../services/tech.service";
import { CreateTechDto, UpdateTechDto } from "../../dtos/tech.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { TechDto } from "../../dtos/tech.dto";
import { TechStackQueryDto } from "../../dtos/tech.query.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/tech-stack")
@UseInterceptors(new SerializeInterceptor(TechDto))
export class AdminTechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  async findAll(@Query() query: TechStackQueryDto) {
    return await this.techService.findAll({ type: query.type, isAdmin: true });
  }

  @Post()
  async create(@Body() createTechDto: CreateTechDto) {
    return await this.techService.create(createTechDto);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateTechDto: UpdateTechDto) {
    return await this.techService.update(id, updateTechDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.techService.remove(id);
  }
}
