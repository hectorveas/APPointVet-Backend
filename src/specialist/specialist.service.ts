import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecialistDTO, UpdateSpecialistDTO } from './dto/specialist.dto';
import { Specialist } from './interfaces/specialist.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SpecialistService {
  constructor(
    @InjectModel('Specialist')
    private readonly SpecialistModel: Model<Specialist>,
  ) {}

  async createSpecialist(createSpecialistDTO: CreateSpecialistDTO) {
    const newSpecialist = new this.SpecialistModel(createSpecialistDTO);
    const hashPassword = await bcrypt.hash(newSpecialist.password, 10);
    newSpecialist.password = hashPassword;
    const model = await newSpecialist.save();
    const { password, ...rta } = model.toJSON();
    return rta;
  }

  findByEmail(mail: string) {
    return this.SpecialistModel.findOne({ mail });
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
    updateSpecialistDTO: UpdateSpecialistDTO,
  ): Promise<Specialist> {
    const updatedSpecialist = await this.SpecialistModel.findByIdAndUpdate(
      id,
      updateSpecialistDTO,
      { new: true },
    );
    return updatedSpecialist;
  }
}
