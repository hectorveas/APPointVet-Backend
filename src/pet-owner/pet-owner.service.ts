import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetOwnerDTO } from './dto/pet-owner.dto';
import { PetOwner } from './interfaces/pet-owner.interface';

@Injectable()
export class PetOwnerService {
  constructor(
    @InjectModel('PetOwner') private readonly petOwnerModel: Model<PetOwner>,
  ) {}

  async createPetOwner(
    createPetOwnerDTO: CreatePetOwnerDTO,
  ): Promise<PetOwner> {
    const newPetOwner = new this.petOwnerModel(createPetOwnerDTO);
    return newPetOwner.save();
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
    createPetOwnerDTO: CreatePetOwnerDTO,
  ): Promise<PetOwner> {
    const updatedPetOwner = await this.petOwnerModel.findByIdAndUpdate(
      id,
      createPetOwnerDTO,
      { new: true },
    );
    return updatedPetOwner;
  }
}
