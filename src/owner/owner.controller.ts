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
import { CreateOwnerDTO } from './dto/owner.dto';
import { OwnerService } from './owner.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Owners')
@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Post()
  async createOwner(@Res() res, @Body() createOwnerDTO: CreateOwnerDTO) {
    const owner = await this.ownerService.createOwner(createOwnerDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Owner Successfully Created',
      owner,
    });
  }

  @Get()
  async getOwners(@Res() res) {
    const owner = await this.ownerService.getOwners();
    return res.status(HttpStatus.OK).json(owner);
  }

  @Get('/:id')
  async getOwner(@Res() res, @Param('id') id) {
    const owner = await this.ownerService.getOwner(id);
    if (!owner) throw new NotFoundException('Owner does not exist!');
    return res.status(HttpStatus.OK).json(owner);
  }

  @Delete('/:id')
  async deleteOwner(@Res() res, @Param('id') id) {
    const owner = await this.ownerService.deleteOwner(id);
    if (!owner) throw new NotFoundException('Owner does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Owner Deleted Successfully',
      owner,
    });
  }

  @Put('/:id')
  async updateOwner(
    @Res() res,
    @Body() createOwnerDTO: CreateOwnerDTO,
    @Param('id') id,
  ) {
    const owner = await this.ownerService.updateOwner(id, createOwnerDTO);
    if (!owner) throw new NotFoundException('Owner does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Owner Updated Successfully',
      owner,
    });
  }
}
