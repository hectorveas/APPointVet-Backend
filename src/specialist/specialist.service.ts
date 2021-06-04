import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecialistDTO } from './dto/specialist.dto';
import { Specialist } from './interfaces/specialist.interface';

@Injectable()
export class SpecialistService {
  constructor(
    @InjectModel('Specialist')
    private readonly SpecialistModel: Model<Specialist>,
  ) {}

  // Post a single product
  async createSpecialist(
    createSpecialistDTO: CreateSpecialistDTO,
  ): Promise<Specialist> {
    const newSpecialist = new this.SpecialistModel(createSpecialistDTO);
    return newSpecialist.save();
  }

  async getAppointements(): Promise<Specialist[]> {
    const appointements = await this.SpecialistModel.find();
    return appointements;
  }

  async getSpecialist(id: string): Promise<Specialist> {
    const Specialist = await this.SpecialistModel.findById(id);
    return Specialist;
  }

  async deleteSpecialist(id: string): Promise<any> {
    const Specialist = await this.SpecialistModel.findByIdAndDelete(id);
    return Specialist;
  }

  async updateSpecialist(
    id: string,
    createSpecialistDTO: CreateSpecialistDTO,
  ): Promise<Specialist> {
    const updatedSpecialist = await this.SpecialistModel.findByIdAndUpdate(
      id,
      createSpecialistDTO,
      { new: true },
    );
    return updatedSpecialist;
  }
}
