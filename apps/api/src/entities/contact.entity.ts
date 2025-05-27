import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("contact_methods")
export class ContactMethod extends BaseEntity {
  @Column({ length: 50 })
  platformName: string;

  @Column({ length: 255 })
  url: string;

  @Column({ length: 255 })
  logoUrl: string;

  @Column({ length: 7 }) // For hex color codes
  color: string;

  @Column("text", { nullable: true })
  description?: string;
}
