import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetOwnerDTO, UpdatePetOwnerDTO } from './dto/pet-owner.dto';
import { PetOwner } from './interfaces/pet-owner.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PetOwnerService {
  constructor(
    @InjectModel('PetOwner') private readonly petOwnerModel: Model<PetOwner>,
  ) {}

  async createPetOwner(createPetOwnerDTO: CreatePetOwnerDTO) {
    const newPetOwner = new this.petOwnerModel(createPetOwnerDTO);
    const hashPassword = await bcrypt.hash(newPetOwner.password, 10);
    newPetOwner.password = hashPassword;
    const model = await newPetOwner.save();
    const { password, ...rta } = model.toJSON();
    return rta;
  }

  findByEmail(mail: string) {
    return this.petOwnerModel.findOne({ mail });
  }

  async getPetOwners(): Promise<PetOwner[]> {
    const petOwners = await this.petOwnerModel.find();
    return petOwners;
  }

  async getPetOwner(id: string): Promise<PetOwner> {
    const petOwner = await this.petOwnerModel.findById(id);
    return petOwner;
  }

  async deletePetOwner(id: string): Promise<any> {
    const petOwner = await this.petOwnerModel.findByIdAndDelete(id);
    return petOwner;
  }

  async updatePetOwner(
    id: string,
    updatePetOwnerDTO: UpdatePetOwnerDTO,
  ): Promise<PetOwner> {
    const updatedPetOwner = await this.petOwnerModel.findByIdAndUpdate(
      id,
      updatePetOwnerDTO,
      { new: true },
    );
    return updatedPetOwner;
  }
}
