import { Expose, Type } from "class-transformer";
import { IsString, IsUrl, IsBoolean, ValidateNested } from "class-validator";



export class TechStackData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsUrl()
  logoUrl: string;

  @Expose()
  @IsString()
  color: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsString()
  description?: string;

  @Expose()
  @IsBoolean()
  isFeatured: boolean;
}


export class TechStackResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => TechStackData)
  techs: TechStackData[];
}
