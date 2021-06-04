import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerDTO } from './dto/owner.dto';
import { Owner } from './interfaces/owner.interface';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel('Owner') private readonly ownerModel: Model<Owner>,
  ) {}

  async createOwner(createOwnerDTO: CreateOwnerDTO): Promise<Owner> {
    const newOwner = new this.ownerModel(createOwnerDTO);
    return newOwner.save();
  }

  async getOwners(): Promise<Owner[]> {
    const owners = await this.ownerModel.find();
    return owners;
  }

  async getOwner(id: string): Promise<Owner> {
    const owner = await this.ownerModel.findById(id);
    return owner;
  }

  async deleteOwner(id: string): Promise<any> {
    const owner = await this.ownerModel.findByIdAndDelete(id);
    return owner;
  }

  async updateOwner(
    id: string,
    createOwnerDTO: CreateOwnerDTO,
  ): Promise<Owner> {
    const updatedOwner = await this.ownerModel.findByIdAndUpdate(
      id,
      createOwnerDTO,
      { new: true },
    );
    return updatedOwner;
  }
}
