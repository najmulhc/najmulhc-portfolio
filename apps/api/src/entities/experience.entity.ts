import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("experiences")
export class Experience extends BaseEntity {
  @Column({ length: 100 })
  jobTitle: string;

  @Column({ length: 100 })
  companyName: string;

  @Column({ length: 255 })
  companyLogoUrl: string;

  @Column({ length: 10 }) // YYYY-MM format
  startDate: string;

  @Column({ length: 10, nullable: true }) // YYYY-MM format
  endDate?: string;

  @Column({ length: 100 })
  location: string;

  @Column("text")
  description: string;

  @Column("simple-array")
  keyAchievements: string[];
}
