import { IsString, MinLength, IsUrl, IsInt, Min } from "class-validator";

export class CreateHeroSectionDto {
  @IsString()
  @MinLength(10)
  tagline: string;

  @IsString()
  @MinLength(3)
  ctaText: string;

  @IsUrl()
  ctaUrl: string;
}

export class CreateAboutMeDto {
  @IsString()
  @MinLength(50)
  paragraph: string;

  @IsUrl()
  photoUrl: string;
}

export class CreateQuoteDto {
  @IsString()
  @MinLength(10)
  text: string;

  @IsString()
  @MinLength(2)
  author: string;
}

export class CreateKeyStatsDto {
  @IsInt()
  @Min(0)
  knownTechs: number;

  @IsInt()
  @Min(0)
  projects: number;

  @IsInt()
  @Min(0)
  experienceYears: number;

  @IsInt()
  @Min(0)
  leetCodeSolved: number;
}
