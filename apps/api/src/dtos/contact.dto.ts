export class ContactMethodDto {
  id: string;
  platformName: string;
  url: string;
  logoUrl: string;
  color: string;
  description?: string;
}

export class ContactMessageDto {
  name: string;
  email: string;
  message: string;
}

export class ContactMessageResponseDto {
  success: boolean;
  messageId: string;
}
