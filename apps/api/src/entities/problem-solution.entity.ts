import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Project } from "./project.entity";

@Entity("problem_solutions")
export class ProblemSolution extends BaseEntity {
  @Column("text")
  problem: string;

  @Column("text")
  solution: string;

  @ManyToOne(() => Project, (project) => project.problemsAndSolutions)
  project: Project;
}
