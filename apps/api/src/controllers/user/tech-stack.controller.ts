import { Controller, Get, Query, UseInterceptors } from "@nestjs/common";
import { TechService } from "../../services/tech.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { TechStackResponse } from "../../dtos/responses";
import { TechStackQueryDto } from "../../dtos/tech.query.dto";

@Controller("tech-stack")
export class TechStackController {
  constructor(private readonly techService: TechService) {}

  @Get()
  @UseInterceptors(new SerializeInterceptor(TechStackResponse))
  async getAllTechs(@Query() query: TechStackQueryDto) {
    const techs = await this.techService.findAll({ type: query.type });
    return { techs };
  }
}
