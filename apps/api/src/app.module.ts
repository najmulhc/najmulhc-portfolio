import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AdminContactController,
  AdminEducationController,
  AdminExperienceController,
  AdminHomeController,
  AdminProjectController,
  AdminTechController,
} from './controllers/admin';
import { AppController } from './controllers/app.controller';
import {
  ContactController,
  EducationController,
  ExperienceController,
  HomeController,
  ProjectsController,
  TechStackController,
} from './controllers/user';
import { ContactMethod } from './entities/contact.entity';
import { Education, OnlineCourse } from './entities/education.entity';
import { Experience } from './entities/experience.entity';
import { AboutMe, HeroSection, KeyStats, Quote } from './entities/home.entity';
import { ProblemSolution } from './entities/problem-solution.entity';
import { Project } from './entities/project.entity';
import { Tech } from './entities/tech.entity';
import { AdminGuard } from './guards';
import {
  ContactService,
  EducationService,
  ExperienceService,
  HomeService,
  ProjectService,
  TechService,
} from './services';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'neondb',
      host: 'ep-hidden-dew-a11ht0uf-pooler.ap-southeast-1.aws.neon.tech',
      port:  5432,
      username: 'neondb_owner',
      password: 'npg_zO1iHKXQTh7D',
      entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      ssl: {},
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
