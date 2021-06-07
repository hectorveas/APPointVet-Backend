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
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './dto/appointment.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
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

  @Public()
  @Get()
  async getAppointments(@Res() res) {
    const appointment = await this.appointmentService.getAppointements();
    return res.status(HttpStatus.OK).json(appointment);
  }

  @Get('/:id')
  async getAppointment(@Res() res, @Param('id') id) {
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
