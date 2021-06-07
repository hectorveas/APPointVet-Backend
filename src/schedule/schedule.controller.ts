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
import { CreateScheduleDTO } from './dto/schedule.dto';
import { ScheduleService } from './schedule.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Schedules')
@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  async createSchedule(
    @Res() res,
    @Body() createScheduleDTO: CreateScheduleDTO,
  ) {
    const Schedule = await this.scheduleService.createSchedule(
      createScheduleDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Schedule Successfully Created',
      Schedule,
    });
  }

  @Get()
  async getVeterinaries(@Res() res) {
    const Schedule = await this.scheduleService.getAppointements();
    return res.status(HttpStatus.OK).json(Schedule);
  }

  @Get('/:id')
  async getSchedule(@Res() res, @Param('id') id) {
    const Schedule = await this.scheduleService.getSchedule(id);
    if (!Schedule) throw new NotFoundException('Schedule does not exist!');
    return res.status(HttpStatus.OK).json(Schedule);
  }

  @Delete('/:id')
  async deleteSchedule(@Res() res, @Param('id') id) {
    const Schedule = await this.scheduleService.deleteSchedule(id);
    if (!Schedule) throw new NotFoundException('Schedule does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Schedule Deleted Successfully',
      Schedule,
    });
  }

  @Put('/:id')
  async updateSchedule(
    @Res() res,
    @Body() createScheduleDTO: CreateScheduleDTO,
    @Param('id') id,
  ) {
    const Schedule = await this.scheduleService.updateSchedule(
      id,
      createScheduleDTO,
    );
    if (!Schedule) throw new NotFoundException('Schedule does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Schedule Updated Successfully',
      Schedule,
    });
  }
}
