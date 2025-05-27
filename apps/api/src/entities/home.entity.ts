import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("hero_sections")
export class HeroSection extends BaseEntity {
  @Column("text")
  tagline: string;

  @Column({ length: 50 })
  ctaText: string;

  @Column({ length: 255 })
  ctaUrl: string;
}

@Entity("key_stats")
export class KeyStats extends BaseEntity {
  @Column("int", { default: 0 })
  knownTechs: number;

  @Column("int", { default: 0 })
  projects: number;

  @Column("int", { default: 0 })
  experienceYears: number;

  @Column("int", { default: 0 })
  leetCodeSolved: number;
}

@Entity("about_me")
export class AboutMe extends BaseEntity {
  @Column("text")
  paragraph: string;

  @Column({ length: 255 })
  photoUrl: string;
}

@Entity("quotes")
export class Quote extends BaseEntity {
  @Column("text")
  text: string;

  @Column({ length: 100 })
  author: string;
}
