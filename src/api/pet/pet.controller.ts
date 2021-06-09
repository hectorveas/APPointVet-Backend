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
} from '@nestjs/common';
import { CreatePetDTO } from './dto/pet.dto';
import { PetService } from './pet.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')
@Controller('api/pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  async createPet(@Res() res, @Body() createPetDTO: CreatePetDTO) {
    const pet = await this.petService.createPet(createPetDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Pet Successfully Created',
      pet,
    });
  }

  @Get()
  async getPets(@Res() res) {
    const pet = await this.petService.getPets();
    return res.status(HttpStatus.OK).json(pet);
  }

  @Get('/:id')
  async getPet(@Res() res, @Param('id') id) {
    const pet = await this.petService.getPet(id);
    if (!pet) throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json(pet);
  }

  @Delete('/:id')
  async deletePet(@Res() res, @Param('id') id) {
    const pet = await this.petService.deletePet(id);
    if (!pet) throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Pet Deleted Successfully',
      pet,
    });
  }

  @Put('/:id')
  async updatePet(
    @Res() res,
    @Body() createPetDTO: CreatePetDTO,
    @Param('id') id,
  ) {
    const pet = await this.petService.updatePet(id, createPetDTO);
    if (!pet) throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Pet Updated Successfully',
      pet,
    });
  }
}
