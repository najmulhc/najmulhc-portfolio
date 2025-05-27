import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./controllers/app.controller";
import {
  AdminTechController,
  AdminProjectController,
  AdminExperienceController,
  AdminEducationController,
  AdminContactController,
  AdminHomeController,
} from "./controllers/admin";
import {
  ContactController,
  EducationController,
  ExperienceController,
  HomeController,
  ProjectsController,
  TechStackController,
} from "./controllers/user";
import { Tech } from "./entities/tech.entity";
import { Project } from "./entities/project.entity";
import { ProblemSolution } from "./entities/problem-solution.entity";
import { Experience } from "./entities/experience.entity";
import { Education, OnlineCourse } from "./entities/education.entity";
import { ContactMethod } from "./entities/contact.entity";
import { HeroSection, KeyStats, AboutMe, Quote } from "./entities/home.entity";
import {
  TechService,
  ProjectService,
  ExperienceService,
  EducationService,
  ContactService,
  HomeService,
} from "./services";
import { AdminGuard } from "./guards";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: process.env.DB_PATH || "portfolio.sqlite",
      entities: [__dirname + "/entities/**/*.entity{.ts,.js}"],
      synchronize: process.env.NODE_ENV !== "production",
      logging: process.env.NODE_ENV !== "production",
    }),
    TypeOrmModule.forFeature([
      Tech,
      Project,
      ProblemSolution,
      Experience,
      Education,
      OnlineCourse,
      ContactMethod,
      HeroSection,
      KeyStats,
      AboutMe,
      Quote,
    ]),
  ],
  controllers: [
    AppController,
    // Admin Controllers
    AdminTechController,
    AdminProjectController,
    AdminExperienceController,
    AdminEducationController,
    AdminContactController,
    AdminHomeController,
    // User Controllers
    ContactController,
    EducationController,
    ExperienceController,
    HomeController,
    ProjectsController,
    TechStackController,
  ],
  providers: [
    TechService,
    ProjectService,
    ExperienceService,
    EducationService,
    ContactService,
    HomeService,
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
  ],
})
export class AppModule {}
