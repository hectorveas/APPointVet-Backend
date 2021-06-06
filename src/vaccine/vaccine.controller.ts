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
import { CreateVaccineDTO } from './dto/vaccine.dto';
import { VaccineService } from './vaccine.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vaccines')
@Controller('vaccine')
export class VaccineController {
  constructor(private vaccineService: VaccineService) {}

  @Post()
  async createVaccine(@Res() res, @Body() createVaccineDTO: CreateVaccineDTO) {
    const Vaccine = await this.vaccineService.createVaccine(createVaccineDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Vaccine Successfully Created',
      Vaccine,
    });
  }

  @Get()
  async getVeterinaries(@Res() res) {
    const Vaccine = await this.vaccineService.getAppointements();
    return res.status(HttpStatus.OK).json(Vaccine);
  }

  @Get('/:id')
  async getVaccine(@Res() res, @Param('id') id) {
    const Vaccine = await this.vaccineService.getVaccine(id);
    if (!Vaccine) throw new NotFoundException('Vaccine does not exist!');
    return res.status(HttpStatus.OK).json(Vaccine);
  }

  @Delete()
  async deleteVaccine(@Res() res, @Query('id') id) {
    const Vaccine = await this.vaccineService.deleteVaccine(id);
    if (!Vaccine) throw new NotFoundException('Vaccine does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Vaccine Deleted Successfully',
      Vaccine,
    });
  }

  @Put()
  async updateVaccine(
    @Res() res,
    @Body() createVaccineDTO: CreateVaccineDTO,
    @Query('id') id,
  ) {
    const Vaccine = await this.vaccineService.updateVaccine(
      id,
      createVaccineDTO,
    );
    if (!Vaccine) throw new NotFoundException('Vaccine does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Vaccine Updated Successfully',
      Vaccine,
    });
  }
}
