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
import { CreateLocalDTO } from './dto/local.dto';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(private localService: LocalService) {}

  @Post()
  async createLocal(@Res() res, @Body() createLocalDTO: CreateLocalDTO) {
    const local = await this.localService.createLocal(createLocalDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Local Successfully Created',
      local,
    });
  }

  @Get()
  async getLocals(@Res() res) {
    const local = await this.localService.getLocals();
    return res.status(HttpStatus.OK).json(local);
  }

  @Get('/:id')
  async getLocal(@Res() res, @Param('id') id) {
    const local = await this.localService.getLocal(id);
    if (!local) throw new NotFoundException('Local does not exist!');
    return res.status(HttpStatus.OK).json(local);
  }

  @Delete()
  async deleteLocal(@Res() res, @Query('id') id) {
    const local = await this.localService.deleteLocal(id);
    if (!local) throw new NotFoundException('Local does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Local Deleted Successfully',
      local,
    });
  }

  @Put()
  async updateLocal(
    @Res() res,
    @Body() createLocalDTO: CreateLocalDTO,
    @Query('id') id,
  ) {
    const local = await this.localService.updateLocal(id, createLocalDTO);
    if (!local) throw new NotFoundException('Local does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Local Updated Successfully',
      local,
    });
  }
}
