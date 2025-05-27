import { IsString, IsUrl, IsEmail, MinLength, IsOptional } from "class-validator";

export class CreateContactMethodDto {
  @IsString()
  @MinLength(2)
  platformName: string;

  @IsUrl()
  url: string;

  @IsUrl()
  logoUrl: string;

  @IsString()
  color: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class CreateContactMessageDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10)
  message: string;
}
