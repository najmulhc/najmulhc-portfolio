import { IsString, IsUUID, IsUrl, MinLength } from "class-validator";
import { Type } from "class-transformer";

export class CreateTechDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsUrl()
  logoUrl: string;

  @IsString()
  color: string;

  @IsString()
  type: "Language" | "Framework" | "Tool" | "Other";
}

export class UpdateTechDto extends CreateTechDto {
  @IsUUID()
  id: string;
}
