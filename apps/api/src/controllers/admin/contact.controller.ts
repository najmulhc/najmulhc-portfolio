import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ContactService } from "../../services/contact.service";
import { CreateContactMethodDto } from "../../dtos/contact.validation.dto";
import { SerializeInterceptor } from "../../interceptors/serialize.interceptor";
import { ContactMethodDto } from "../../dtos/contact.dto";
import { Admin } from "../../decorators/admin.decorator";

@Admin()
@Controller("admin/contact")
@UseInterceptors(new SerializeInterceptor(ContactMethodDto))
export class AdminContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("method")
  async createContactMethod(@Body() createMethodDto: CreateContactMethodDto) {
    return await this.contactService.createContactMethod(createMethodDto);
  }

  @Patch("method/:id")
  async updateContactMethod(
    @Param("id") id: string,
    @Body() updateMethodDto: CreateContactMethodDto
  ) {
    return await this.contactService.updateContactMethod(id, updateMethodDto);
  }

  @Delete("method/:id")
  async removeContactMethod(@Param("id") id: string) {
    return await this.contactService.removeContactMethod(id);
  }
}
