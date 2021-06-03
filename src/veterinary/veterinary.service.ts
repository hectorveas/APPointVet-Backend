import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVeterinaryDTO } from './dto/veterinary.dto';
import { Veterinary } from './interfaces/veterinary.interface';

@Injectable()
export class VeterinaryService {
  constructor(
    @InjectModel('Veterinary')
    private readonly VeterinaryModel: Model<Veterinary>,
  ) {}

  // Post a single product
  async createVeterinary(
    createVeterinaryDTO: CreateVeterinaryDTO,
  ): Promise<Veterinary> {
    const newVeterinary = new this.VeterinaryModel(createVeterinaryDTO);
    return newVeterinary.save();
  }

  async getAppointements(): Promise<Veterinary[]> {
    const appointements = await this.VeterinaryModel.find();
    return appointements;
  }

  async getVeterinary(id: string): Promise<Veterinary> {
    const Veterinary = await this.VeterinaryModel.findById(id);
    return Veterinary;
  }

  async deleteVeterinary(id: string): Promise<any> {
    const Veterinary = await this.VeterinaryModel.findByIdAndDelete(id);
    return Veterinary;
  }

  async updateVeterinary(
    id: string,
    createVeterinaryDTO: CreateVeterinaryDTO,
  ): Promise<Veterinary> {
    const updatedVeterinary = await this.VeterinaryModel.findByIdAndUpdate(
      id,
      createVeterinaryDTO,
      { new: true },
    );
    return updatedVeterinary;
  }
}
