import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/contact.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async createContact(@Res() res, @Body() createContactDTO: CreateContactDTO) {
    const contact = await this.contactService.createContact(createContactDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Contact Successfully Created',
      contact,
    });
  }

  @Get()
  async getContacts(@Res() res) {
    const contact = await this.contactService.getContacts();
    return res.status(HttpStatus.OK).json(contact);
  }

  @Get('/:id')
  async getContact(@Res() res, @Param('id') id) {
    const contact = await this.contactService.getContact(id);
    if (!contact) throw new NotFoundException('Contact does not exist!');
    return res.status(HttpStatus.OK).json(contact);
  }

  @Delete()
  async deleteContact(@Res() res, @Query('id') id) {
    const contact = await this.contactService.deleteContact(id);
    if (!contact) throw new NotFoundException('Contact does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Contact Deleted Successfully',
      contact,
    });
  }

  @Put()
  async updateContact(
    @Res() res,
    @Body() createContactDTO: CreateContactDTO,
    @Query('id') id,
  ) {
    const contact = await this.contactService.updateContact(
      id,
      createContactDTO,
    );
    if (!contact) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Contact Updated Successfully',
      contact,
    });
  }
}
