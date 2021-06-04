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
import { CreatePetOwnerDTO } from './dto/pet-owner.dto';
import { PetOwnerService } from './pet-owner.service';

@Controller('pet-owner')
export class PetOwnerController {
  constructor(private petOwnerService: PetOwnerService) {}

  @Post()
  async createPetOwner(
    @Res() res,
    @Body() createPetOwnerDTO: CreatePetOwnerDTO,
  ) {
    const petOwner = await this.petOwnerService.createPetOwner(
      createPetOwnerDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'PetOwner Successfully Created',
      petOwner,
    });
  }

  @Get()
  async getPetOwners(@Res() res) {
    const petOwner = await this.petOwnerService.getPetOwners();
    return res.status(HttpStatus.OK).json(petOwner);
  }

  @Get('/:id')
  async getPetOwner(@Res() res, @Param('id') id) {
    const petOwner = await this.petOwnerService.getPetOwner(id);
    if (!petOwner) throw new NotFoundException('PetOwner does not exist!');
    return res.status(HttpStatus.OK).json(petOwner);
  }

  @Delete()
  async deletePetOwner(@Res() res, @Query('id') id) {
    const petOwner = await this.petOwnerService.deletePetOwner(id);
    if (!petOwner) throw new NotFoundException('PetOwner does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'PetOwner Deleted Successfully',
      petOwner,
    });
  }

  @Put()
  async updatePetOwner(
    @Res() res,
    @Body() createPetOwnerDTO: CreatePetOwnerDTO,
    @Query('id') id,
  ) {
    const petOwner = await this.petOwnerService.updatePetOwner(
      id,
      createPetOwnerDTO,
    );
    if (!petOwner) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'PetOwner Updated Successfully',
      petOwner,
    });
  }
}
