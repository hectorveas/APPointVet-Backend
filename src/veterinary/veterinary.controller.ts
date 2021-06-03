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

import { VeterinaryService } from './veterinary.service';
import { CreateVeterinaryDTO } from './dto/veterinary.dto';

@Controller('veterinary')
export class VeterinaryController {
  constructor(private veterinaryService: VeterinaryService) {}

  @Post()
  async createVeterinary(
    @Res() res,
    @Body() createVeterinaryDTO: CreateVeterinaryDTO,
  ) {
    const Veterinary = await this.veterinaryService.createVeterinary(
      createVeterinaryDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Veterinary Successfully Created',
      Veterinary,
    });
  }

  @Get()
  async getVeterinaries(@Res() res) {
    const Veterinary = await this.veterinaryService.getAppointements();
    return res.status(HttpStatus.OK).json(Veterinary);
  }

  @Get('/:id')
  async getVeterinary(@Res() res, @Param('id') id) {
    const Veterinary = await this.veterinaryService.getVeterinary(id);
    if (!Veterinary) throw new NotFoundException('Veterinary does not exist!');
    return res.status(HttpStatus.OK).json(Veterinary);
  }

  @Delete()
  async deleteVeterinary(@Res() res, @Query('id') id) {
    const Veterinary = await this.veterinaryService.deleteVeterinary(id);
    if (!Veterinary) throw new NotFoundException('Veterinary does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Veterinary Deleted Successfully',
      Veterinary,
    });
  }

  @Put()
  async updateVeterinary(
    @Res() res,
    @Body() createVeterinaryDTO: CreateVeterinaryDTO,
    @Query('id') id,
  ) {
    const Veterinary = await this.veterinaryService.updateVeterinary(
      id,
      createVeterinaryDTO,
    );
    if (!Veterinary) throw new NotFoundException('Veterinary does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Veterinary Updated Successfully',
      Veterinary,
    });
  }
}
