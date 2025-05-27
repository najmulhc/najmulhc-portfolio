import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HeroSection, KeyStats, AboutMe, Quote } from "../entities/home.entity";
import {
  CreateHeroSectionDto,
  CreateKeyStatsDto,
  CreateAboutMeDto,
  CreateQuoteDto,
} from "../dtos/home.validation.dto";

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(HeroSection)
    private readonly heroSectionRepository: Repository<HeroSection>,
    @InjectRepository(KeyStats)
    private readonly keyStatsRepository: Repository<KeyStats>,
    @InjectRepository(AboutMe)
    private readonly aboutMeRepository: Repository<AboutMe>,
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>
  ) {}

  // Hero Section Methods
  async createHero(createHeroDto: CreateHeroSectionDto): Promise<HeroSection> {
    const hero = this.heroSectionRepository.create(createHeroDto);
    return await this.heroSectionRepository.save(hero);
  }

  async updateHero(
    id: string,
    updateHeroDto: CreateHeroSectionDto
  ): Promise<HeroSection> {
    const hero = await this.heroSectionRepository.findOneBy({ id });
    if (!hero) {
      throw new NotFoundException(`Hero section with ID "${id}" not found`);
    }
    Object.assign(hero, updateHeroDto);
    return await this.heroSectionRepository.save(hero);
  }

  async removeHero(id: string): Promise<void> {
    const result = await this.heroSectionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Hero section with ID "${id}" not found`);
    }
  }

  // Key Stats Methods
  async createStats(createStatsDto: CreateKeyStatsDto): Promise<KeyStats> {
    const stats = this.keyStatsRepository.create(createStatsDto);
    return await this.keyStatsRepository.save(stats);
  }

  async updateStats(
    id: string,
    updateStatsDto: CreateKeyStatsDto
  ): Promise<KeyStats> {
    const stats = await this.keyStatsRepository.findOneBy({ id });
    if (!stats) {
      throw new NotFoundException(`Key stats with ID "${id}" not found`);
    }
    Object.assign(stats, updateStatsDto);
    return await this.keyStatsRepository.save(stats);
  }

  async removeStats(id: string): Promise<void> {
    const result = await this.keyStatsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Key stats with ID "${id}" not found`);
    }
  }

  // About Me Methods
  async createAbout(createAboutDto: CreateAboutMeDto): Promise<AboutMe> {
    const about = this.aboutMeRepository.create(createAboutDto);
    return await this.aboutMeRepository.save(about);
  }

  async updateAbout(
    id: string,
    updateAboutDto: CreateAboutMeDto
  ): Promise<AboutMe> {
    const about = await this.aboutMeRepository.findOneBy({ id });
    if (!about) {
      throw new NotFoundException(`About me section with ID "${id}" not found`);
    }
    Object.assign(about, updateAboutDto);
    return await this.aboutMeRepository.save(about);
  }

  async removeAbout(id: string): Promise<void> {
    const result = await this.aboutMeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`About me section with ID "${id}" not found`);
    }
  }

  // Quote Methods
  async createQuote(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const quote = this.quoteRepository.create(createQuoteDto);
    return await this.quoteRepository.save(quote);
  }

  async updateQuote(
    id: string,
    updateQuoteDto: CreateQuoteDto
  ): Promise<Quote> {
    const quote = await this.quoteRepository.findOneBy({ id });
    if (!quote) {
      throw new NotFoundException(`Quote with ID "${id}" not found`);
    }
    Object.assign(quote, updateQuoteDto);
    return await this.quoteRepository.save(quote);
  }

  async removeQuote(id: string): Promise<void> {
    const result = await this.quoteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Quote with ID "${id}" not found`);
    }
  }

  // Getter Methods for User Routes
  async getRandomHero(): Promise<HeroSection> {
    const count = await this.heroSectionRepository.count();
    const randomIndex = Math.floor(Math.random() * count);
    const [hero] = await this.heroSectionRepository.find({
      skip: randomIndex,
      take: 1,
    });
    return hero;
  }

  async getCurrentStats(): Promise<KeyStats> {
    const stats = await this.keyStatsRepository.find({
      order: { updatedAt: "DESC" },
      take: 1,
    });
    return stats[0];
  }

  async getCurrentAbout(): Promise<AboutMe> {
    const about = await this.aboutMeRepository.find({
      order: { updatedAt: "DESC" },
      take: 1,
    });
    return about[0];
  }

  async getRandomQuote(): Promise<Quote> {
    const count = await this.quoteRepository.count();
    const randomIndex = Math.floor(Math.random() * count);
    const [quote] = await this.quoteRepository.find({
      skip: randomIndex,
      take: 1,
    });
    return quote;
  }
}
