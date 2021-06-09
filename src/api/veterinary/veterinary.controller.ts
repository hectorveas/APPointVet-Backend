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
  Res,
  UseGuards,
  //  UseGuards,
  // SetMetadata,
} from '@nestjs/common';

import { VeterinaryService } from './veterinary.service';
import { CreateVeterinaryDTO } from './dto/veterinary.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';
import { Public } from '../../auth/decorators/public.decorator';

@ApiTags('Veterinaries')
@UseGuards(ApiKeyGuard)
@Controller('api/veterinary')
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

  @Public()
  @Get()
  async getVeterinaries(@Res() res) {
    const Veterinary = await this.veterinaryService.getAppointements();
    return res.status(HttpStatus.OK).json(Veterinary);
  }
  //@Public() endpoint publico
  @Get('/:id')
  async getVeterinary(@Res() res, @Param('id') id) {
    const Veterinary = await this.veterinaryService.getVeterinary(id);
    if (!Veterinary) throw new NotFoundException('Veterinary does not exist!');
    return res.status(HttpStatus.OK).json(Veterinary);
  }

  @Delete('/:id')
  async deleteVeterinary(@Res() res, @Param('id') id) {
    const Veterinary = await this.veterinaryService.deleteVeterinary(id);
    if (!Veterinary) throw new NotFoundException('Veterinary does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Veterinary Deleted Successfully',
      Veterinary,
    });
  }

  @Put('/:id')
  async updateVeterinary(
    @Res() res,
    @Body() createVeterinaryDTO: CreateVeterinaryDTO,
    @Param('id') id,
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
