import { Expose, Type } from "class-transformer";
import { IsString, IsUrl, IsBoolean, ValidateNested } from "class-validator";



export class ContactMethodData {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  platformName: string;

  @Expose()
  @IsUrl()
  url: string;

  @Expose()
  @IsUrl()
  logoUrl: string;

  @Expose()
  @IsString()
  color: string;

  @Expose()
  @IsString()
  description?: string;
}

export class ContactMessageResponse {
  @Expose()
  @IsBoolean()
  success: boolean;

  @Expose()
  @IsString()
  messageId: string;
}
export class ContactMethodListResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ContactMethodData)
  contact: ContactMethodData[];
}
