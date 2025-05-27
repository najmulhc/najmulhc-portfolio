import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { ContactService } from "../../services/contact.service";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import {
  ContactMethodListResponse,
  ContactMessageResponse,
} from "../../dtos/responses";
import { CreateContactMessageDto } from "../../dtos/contact.validation.dto";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  @UseInterceptors(new SerializeInterceptor(ContactMethodListResponse))
  async getAllContacts() {
    const contact = await this.contactService.findAllMethods();
    return { contact };
  }

  @Post("message")
  @UseInterceptors(new SerializeInterceptor(ContactMessageResponse))
  async sendMessage(@Body() messageDto: CreateContactMessageDto) {
    const { success, messageId } = await this.contactService.sendMessage(
      messageDto
    );
    return { success, messageId };
  }
}
