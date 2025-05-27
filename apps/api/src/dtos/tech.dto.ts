import { Expose } from "class-transformer";

export class TechDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  logoUrl: string;

  @Expose()
  color: string;

  @Expose()
  type: "Language" | "Framework" | "Tool" | "Other";

  @Expose()
  isFeatured: boolean;

  @Expose()
  description?: string;
}

export class HomeTechDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  logoUrl: string;

  @Expose()
  color: string;

  @Expose()
  isFeatured: boolean;
}
