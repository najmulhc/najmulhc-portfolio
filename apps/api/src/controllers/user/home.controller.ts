import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { HomeService } from "../../services/home.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import {
  AboutMeResponse,
  HeroResponse,
  HomeContactResponse,
  HomeExperienceResponse,
  HomeFeaturedProjectsResponse,
  HomeTechStackResponse,
  KeyStatsResponse,
  QuoteResponse,
} from "../../dtos/responses";
import { ExperienceService } from "../../services/experience.service";
import { ProjectService } from "../../services/project.service";
import { TechService } from "../../services/tech.service";
import { ContactService } from "../../services/contact.service";

@Controller("home")
export class HomeController {
  constructor(
    private readonly homeService: HomeService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
    private readonly techService: TechService,
    private readonly contactService: ContactService
  ) {}

  @Get("hero")
  @UseInterceptors(new SerializeInterceptor(HeroResponse))
  async getHero() {
    const hero = await this.homeService.getRandomHero();
    return { hero };
  }

  @Get("key-stats")
  @UseInterceptors(new SerializeInterceptor(KeyStatsResponse))
  async getStats() {
    const stats = await this.homeService.getCurrentStats();
    return { stats };
  }

  @Get("about-me")
  @UseInterceptors(new SerializeInterceptor(AboutMeResponse))
  async getAboutMe() {
    const aboutMe = await this.homeService.getCurrentAbout();
    return { aboutMe };
  }

  @Get("experience")
  @UseInterceptors(new SerializeInterceptor(HomeExperienceResponse))
  async getExperience() {
    const experiences = await this.experienceService.findLatest();
    return { experiences };
  }

  @Get("projects")
  @UseInterceptors(new SerializeInterceptor(HomeFeaturedProjectsResponse))
  async getFeaturedProjects() {
    const projects = await this.projectService.findFeatured();
    return { projects };
  }

  @Get("quote")
  @UseInterceptors(new SerializeInterceptor(QuoteResponse))
  async getQuote() {
    const quote = await this.homeService.getRandomQuote();
    return { quote };
  }

  @Get("tech-stack")
  @UseInterceptors(new SerializeInterceptor(HomeTechStackResponse))
  async getTechStack() {
    const techs = await this.techService.findFeatured();
    return { techs };
  }

  @Get("contact")
  @UseInterceptors(new SerializeInterceptor(HomeContactResponse))
  async getContact() {
    const contact = await this.contactService.findAllMethods();
    return { contact };
  }
}
