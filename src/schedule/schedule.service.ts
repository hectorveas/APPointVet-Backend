import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScheduleDTO } from './dto/schedule.dto';
import { Schedule } from './interfaces/schedule.interface';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel('Schedule')
    private readonly ScheduleModel: Model<Schedule>,
  ) {}

  // Post a single product
  async createSchedule(
    createScheduleDTO: CreateScheduleDTO,
  ): Promise<Schedule> {
    const newSchedule = new this.ScheduleModel(createScheduleDTO);
    return newSchedule.save();
  }

  async getAppointements(): Promise<Schedule[]> {
    const appointements = await this.ScheduleModel.find();
    return appointements;
  }

  async getSchedule(id: string): Promise<Schedule> {
    const Schedule = await this.ScheduleModel.findById(id);
    return Schedule;
  }

  async deleteSchedule(id: string): Promise<any> {
    const Schedule = await this.ScheduleModel.findByIdAndDelete(id);
    return Schedule;
  }

  async updateSchedule(
    id: string,
    createScheduleDTO: CreateScheduleDTO,
  ): Promise<Schedule> {
    const updatedSchedule = await this.ScheduleModel.findByIdAndUpdate(
      id,
      createScheduleDTO,
      { new: true },
    );
    return updatedSchedule;
  }
}
