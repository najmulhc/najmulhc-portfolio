import { IsEnum, IsOptional } from "class-validator";

export class TechStackQueryDto {
  @IsOptional()
  @IsEnum(["Language", "Framework", "Tool", "Other"])
  type?: "Language" | "Framework" | "Tool" | "Other";
}
