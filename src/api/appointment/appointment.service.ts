import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './dto/appointment.dto';
import { Appointment } from './interfaces/appointment.interface';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment')
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  // Post a single product
  async createAppointment(
    createAppointmentDTO: CreateAppointmentDTO,
  ): Promise<Appointment> {
    const newAppointment = new this.appointmentModel(createAppointmentDTO);
    return newAppointment.save();
  }

  async getAppointements(): Promise<Appointment[]> {
    const appointements = await this.appointmentModel.find();
    return appointements;
  }

  async getAppointment(id: string): Promise<Appointment> {
    const appointment = await this.appointmentModel.findById(id);
    return appointment;
  }

  async deleteAppointment(id: string): Promise<any> {
    const appointment = await this.appointmentModel.findByIdAndDelete(id);
    return appointment;
  }

  async updateAppointment(
    id: string,
    updateAppointmentDTO: UpdateAppointmentDTO,
  ): Promise<Appointment> {
    const updatedAppointment = await this.appointmentModel.findByIdAndUpdate(
      id,
      updateAppointmentDTO,
      { new: true },
    );
    return updatedAppointment;
  }
}
