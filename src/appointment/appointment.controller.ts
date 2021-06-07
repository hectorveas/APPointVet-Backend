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
import { AppointmentService } from './appointment.service';
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './dto/appointment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Appointments')
@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  async createAppointment(
    @Res() res,
    @Body() createAppointmentDTO: CreateAppointmentDTO,
  ) {
    const appointment = await this.appointmentService.createAppointment(
      createAppointmentDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Appointment Successfully Created',
      appointment,
    });
  }

  @Get()
  async getAppointment(@Res() res) {
    const appointment = await this.appointmentService.getAppointements();
    return res.status(HttpStatus.OK).json(appointment);
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const appointment = await this.appointmentService.getAppointment(id);
    if (!appointment)
      throw new NotFoundException('Appointment does not exist!');
    return res.status(HttpStatus.OK).json(appointment);
  }

  @Delete('/:id')
  async deleteAppointment(@Res() res, @Param('id') id) {
    const appointment = await this.appointmentService.deleteAppointment(id);
    if (!appointment)
      throw new NotFoundException('Appointment does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Appointment Deleted Successfully',
      appointment,
    });
  }

  @Put('/:id')
  async updateAppointment(
    @Res() res,
    @Body() updateAppointmentDTO: UpdateAppointmentDTO,
    @Param('id') id,
  ) {
    const appointment = await this.appointmentService.updateAppointment(
      id,
      updateAppointmentDTO,
    );
    if (!appointment) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Appointment Updated Successfully',
      appointment,
    });
  }
}
