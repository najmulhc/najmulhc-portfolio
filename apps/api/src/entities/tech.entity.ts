import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("technologies")
export class Tech extends BaseEntity {
  @Column({ length: 100, unique: true })
  name: string;

  @Column({ length: 255 })
  logoUrl: string;

  @Column({ length: 7 }) // For hex color codes
  color: string;

  @Column({ default: false })
  isFeatured: boolean;

  @Column("text")
  type: "Language" | "Framework" | "Tool" | "Other";

  @Column({ type: "text", nullable: true })
  description?: string;
}
