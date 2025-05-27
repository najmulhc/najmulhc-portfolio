import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContactMethod } from "../entities/contact.entity";
import { CreateContactMethodDto } from "../dtos/contact.validation.dto";
import { CreateContactMessageDto } from "../dtos/contact.validation.dto";

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactMethod)
    private readonly contactMethodRepository: Repository<ContactMethod>
  ) {}

  async createContactMethod(
    createMethodDto: CreateContactMethodDto
  ): Promise<ContactMethod> {
    const method = this.contactMethodRepository.create(createMethodDto);
    return await this.contactMethodRepository.save(method);
  }

  async updateContactMethod(
    id: string,
    updateMethodDto: CreateContactMethodDto
  ): Promise<ContactMethod> {
    const method = await this.contactMethodRepository.findOneBy({ id });
    if (!method) {
      throw new NotFoundException(`Contact method with ID "${id}" not found`);
    }

    Object.assign(method, updateMethodDto);
    return await this.contactMethodRepository.save(method);
  }

  async removeContactMethod(id: string): Promise<void> {
    const result = await this.contactMethodRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Contact method with ID "${id}" not found`);
    }
  }

  async findAllMethods(): Promise<ContactMethod[]> {
    return await this.contactMethodRepository.find();
  }

  async sendMessage(
    messageDto: CreateContactMessageDto
  ): Promise<{ success: boolean; messageId: string }> {
    // Here you would typically integrate with an email service or messaging system
    // For now, we'll simulate a successful message send
    return {
      success: true,
      messageId: `msg-${Date.now()}`,
    };
  }
}
