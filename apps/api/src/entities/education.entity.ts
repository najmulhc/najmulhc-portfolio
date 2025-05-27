import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("education")
export class Education extends BaseEntity {
  @Column({ length: 200 })
  institutionName: string;

  @Column({ length: 100, nullable: true })
  degree?: string;

  @Column({ length: 100, nullable: true })
  fieldOfStudy?: string;

  @Column({ length: 10 }) // YYYY-MM format
  startDate: string;

  @Column({ length: 10, nullable: true })
  endDate?: string;

  @Column("text", { nullable: true })
  description?: string;
}

@Entity("online_courses")
export class OnlineCourse extends BaseEntity {
  @Column({ length: 200 })
  title: string;

  @Column({ length: 100 })
  provider: string;

  @Column({ length: 255, nullable: true })
  certificateUrl?: string;

  @Column({ length: 10 }) // YYYY-MM-DD format
  completionDate: string;
}
