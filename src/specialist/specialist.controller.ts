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
import { CreateSpecialistDTO } from './dto/specialist.dto';
import { SpecialistService } from './specialist.service';

@Controller('specialist')
export class SpecialistController {
  constructor(private specialistService: SpecialistService) {}

  @Post()
  async createSpecialist(
    @Res() res,
    @Body() createSpecialistDTO: CreateSpecialistDTO,
  ) {
    const Specialist = await this.specialistService.createSpecialist(
      createSpecialistDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Specialist Successfully Created',
      Specialist,
    });
  }

  @Get()
  async getVeterinaries(@Res() res) {
    const Specialist = await this.specialistService.getAppointements();
    return res.status(HttpStatus.OK).json(Specialist);
  }

  @Get('/:id')
  async getSpecialist(@Res() res, @Param('id') id) {
    const Specialist = await this.specialistService.getSpecialist(id);
    if (!Specialist) throw new NotFoundException('Specialist does not exist!');
    return res.status(HttpStatus.OK).json(Specialist);
  }

  @Delete()
  async deleteSpecialist(@Res() res, @Query('id') id) {
    const Specialist = await this.specialistService.deleteSpecialist(id);
    if (!Specialist) throw new NotFoundException('Specialist does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Specialist Deleted Successfully',
      Specialist,
    });
  }

  @Put()
  async updateSpecialist(
    @Res() res,
    @Body() createSpecialistDTO: CreateSpecialistDTO,
    @Query('id') id,
  ) {
    const Specialist = await this.specialistService.updateSpecialist(
      id,
      createSpecialistDTO,
    );
    if (!Specialist) throw new NotFoundException('Specialist does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Specialist Updated Successfully',
      Specialist,
    });
  }
}