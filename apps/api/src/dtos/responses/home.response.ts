import { Expose, Type } from "class-transformer";
import {
  IsString,
  IsUrl,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from "class-validator";

// Hero Section Response

export class HeroData {
  @Expose()
  @IsString()
  tagline: string;

  @Expose()
  @IsString()
  ctaText: string;

  @Expose()
  @IsUrl()
  ctaUrl: string;
}

export class HeroResponse {
  @Expose()
  @ValidateNested()
  @Type(() => HeroData)
  hero: HeroData;
}

export class StatsData {
  @Expose()
  @IsNumber()
  projects: number;

  @Expose()
  @IsNumber()
  tech: number;

  @Expose()
  @IsNumber()
  yoe: number;

  @Expose()
  @IsNumber()
  leetCodeSolved: number;
}

// Key Stats Response
export class KeyStatsResponse {
  @Expose()
  @ValidateNested()
  @Type(() => StatsData)
  stats: StatsData;
}


export class AboutMeData {
  @Expose()
  @IsString()
  paragraph: string;

  @Expose()
  @IsUrl()
  photoUrl: string;
}
// About Me Response
export class AboutMeResponse {
  @Expose()
  @ValidateNested()
  @Type(() => AboutMeData)
  aboutMe: AboutMeData;
}



export class HomeCompanyData {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsUrl()
  url: string;

  @Expose()
  @IsUrl()
  logo: string;

  @Expose()
  @IsString()
  location: string;
}

export class HomeExperienceData {
  @Expose()
  @IsString()
  jobTitle: string;

  @Expose()
  @ValidateNested()
  @Type(() => HomeCompanyData)
  company: HomeCompanyData;

  @Expose()
  @IsString()
  startDate: string;

  @Expose()
  @IsString()
  endDate?: string;
}
// Experience Response
export class HomeExperienceResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => HomeExperienceData)
  experiences: HomeExperienceData[];
}



export class HomeFeaturedProjectData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsUrl()
  bannerUrl: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsBoolean()
  isFeatured: boolean;
}


// Featured Projects Response
export class HomeFeaturedProjectsResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => HomeFeaturedProjectData)
  projects: HomeFeaturedProjectData[];
}

export class QuoteData {
  @Expose()
  @IsString()
  text: string;

  @Expose()
  @IsString()
  author: string;
}

// Quote Response
export class QuoteResponse {
  @Expose()
  @ValidateNested()
  @Type(() => QuoteData)
  quote: QuoteData;
}



export class HomeTechData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsUrl()
  logoUrl: string;

  @Expose()
  @IsString()
  color: string;

  @Expose()
  @IsBoolean()
  isFeatured: boolean;
}

// Tech Stack Response
export class HomeTechStackResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => HomeTechData)
  techs: HomeTechData[];
}

// Contact Response


export class HomeContactData {
  @Expose()
  @IsString()
  platformName: string;

  @Expose()
  @IsUrl()
  url: string;

  @Expose()
  @IsUrl()
  logoUrl: string;

  @Expose()
  @IsString()
  color: string;
}


export class HomeContactResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => HomeContactData)
  contact: HomeContactData[];
}
