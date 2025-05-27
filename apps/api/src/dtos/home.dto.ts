export class HeroSectionDto {
  tagline: string;
  ctaText: string;
  ctaUrl: string;
}

export class KeyStatsDto {
  projects: number;
  tech: number;
  yoe: number;
  leetCodeSolved: number;
}

export class AboutMeDto {
  paragraph: string;
  photoUrl: string;
}

export class QuoteDto {
  text: string;
  author: string;
}

export class HomeCompanyDto {
  name: string;
  url: string;
  logo: string;
  location: string;
}

export class HomeExperienceDto {
  jobTitle: string;
  company: HomeCompanyDto;
  startDate: string;
  endDate?: string;
}
