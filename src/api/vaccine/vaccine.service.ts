import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccineDTO, UpdateVaccineDTO } from './dto/vaccine.dto';
import { Vaccine } from './interfaces/vaccine.interface';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel('Vaccine')
    private readonly VaccineModel: Model<Vaccine>,
  ) {}

  // Post a single product
  async createVaccine(createVaccineDTO: CreateVaccineDTO): Promise<Vaccine> {
    const newVaccine = new this.VaccineModel(createVaccineDTO);
    return newVaccine.save();
  }

  async getAppointements(): Promise<Vaccine[]> {
    const appointements = await this.VaccineModel.find();
    return appointements;
  }

  async getVaccine(id: string): Promise<Vaccine> {
    const Vaccine = await this.VaccineModel.findById(id);
    return Vaccine;
  }

  async deleteVaccine(id: string): Promise<any> {
    const Vaccine = await this.VaccineModel.findByIdAndDelete(id);
    return Vaccine;
  }

  async updateVaccine(
    id: string,
    updateVaccineDTO: UpdateVaccineDTO,
  ): Promise<Vaccine> {
    const updatedVaccine = await this.VaccineModel.findByIdAndUpdate(
      id,
      updateVaccineDTO,
      { new: true },
    );
    return updatedVaccine;
  }
}
