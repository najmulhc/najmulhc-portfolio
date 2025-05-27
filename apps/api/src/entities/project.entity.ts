import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "./base.entity";
import { Tech } from "./tech.entity";
import { ProblemSolution } from "./problem-solution.entity";

@Entity("projects")
export class Project extends BaseEntity {
  @Column({ length: 200, unique: true })
  title: string;

  @Column("text")
  shortDescription: string;

  @Column({ length: 50 })
  type: string;

  @Column({ length: 255, nullable: true })
  bannerUrl?: string;

  @Column({ length: 255, nullable: true })
  backgroundImageUrl?: string;

  @Column({ length: 255, nullable: true })
  githubUrl?: string;

  @Column({ length: 255, nullable: true })
  liveDemoUrl?: string;

  @Column("simple-array")
  features: string[];

  @Column({ nullable: true })
  technicalOverview?: string;

  @OneToMany(
    () => ProblemSolution,
    (problemSolution) => problemSolution.project,
    {
      cascade: true,
    }
  )
  problemsAndSolutions: ProblemSolution[];

  @Column()
  isFeatured: boolean;

  @ManyToMany(() => Tech)
  @JoinTable({
    name: "project_tech_stack",
    joinColumn: { name: "project_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "tech_id", referencedColumnName: "id" },
  })
  techStack: Tech[];

  @Column("bigint")
  publishedAt: number;
}
