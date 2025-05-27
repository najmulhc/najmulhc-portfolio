import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { HomeService } from "../../services/home.service";
import {
  CreateHeroSectionDto,
  CreateKeyStatsDto,
  CreateAboutMeDto,
  CreateQuoteDto,
} from "../../dtos/home.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import {
  HeroSectionDto,
  KeyStatsDto,
  AboutMeDto,
  QuoteDto,
} from "../../dtos/home.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/home")
export class AdminHomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post("hero")
  @UseInterceptors(new SerializeInterceptor(HeroSectionDto))
  async createHero(@Body() createHeroDto: CreateHeroSectionDto) {
    return await this.homeService.createHero(createHeroDto);
  }

  @Patch("hero/:id")
  @UseInterceptors(new SerializeInterceptor(HeroSectionDto))
  async updateHero(
    @Param("id") id: string,
    @Body() updateHeroDto: CreateHeroSectionDto
  ) {
    return await this.homeService.updateHero(id, updateHeroDto);
  }

  @Delete("hero/:id")
  async removeHero(@Param("id") id: string) {
    return await this.homeService.removeHero(id);
  }

  @Post("stats")
  @UseInterceptors(new SerializeInterceptor(KeyStatsDto))
  async createStats(@Body() createStatsDto: CreateKeyStatsDto) {
    return await this.homeService.createStats(createStatsDto);
  }

  @Patch("stats/:id")
  @UseInterceptors(new SerializeInterceptor(KeyStatsDto))
  async updateStats(
    @Param("id") id: string,
    @Body() updateStatsDto: CreateKeyStatsDto
  ) {
    return await this.homeService.updateStats(id, updateStatsDto);
  }

  @Post("about")
  @UseInterceptors(new SerializeInterceptor(AboutMeDto))
  async createAbout(@Body() createAboutDto: CreateAboutMeDto) {
    return await this.homeService.createAbout(createAboutDto);
  }

  @Patch("about/:id")
  @UseInterceptors(new SerializeInterceptor(AboutMeDto))
  async updateAbout(
    @Param("id") id: string,
    @Body() updateAboutDto: CreateAboutMeDto
  ) {
    return await this.homeService.updateAbout(id, updateAboutDto);
  }

  @Post("quote")
  @UseInterceptors(new SerializeInterceptor(QuoteDto))
  async createQuote(@Body() createQuoteDto: CreateQuoteDto) {
    return await this.homeService.createQuote(createQuoteDto);
  }

  @Patch("quote/:id")
  @UseInterceptors(new SerializeInterceptor(QuoteDto))
  async updateQuote(
    @Param("id") id: string,
    @Body() updateQuoteDto: CreateQuoteDto
  ) {
    return await this.homeService.updateQuote(id, updateQuoteDto);
  }

  @Delete("quote/:id")
  async removeQuote(@Param("id") id: string) {
    return await this.homeService.removeQuote(id);
  }
}
