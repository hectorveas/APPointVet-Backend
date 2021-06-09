import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocalDTO, UpdateLocalDTO } from './dto/local.dto';
import { Local } from './interfaces/local.interface';

@Injectable()
export class LocalService {
  constructor(
    @InjectModel('Local') private readonly localModel: Model<Local>,
  ) {}

  async createLocal(createLocalDTO: CreateLocalDTO): Promise<Local> {
    const newLocal = new this.localModel(createLocalDTO);
    return newLocal.save();
  }

  async getLocals(): Promise<Local[]> {
    const locals = await this.localModel.find();
    return locals;
  }

  async getLocal(id: string): Promise<Local> {
    const local = await this.localModel.findById(id);
    return local;
  }

  async deleteLocal(id: string): Promise<any> {
    const local = await this.localModel.findByIdAndDelete(id);
    return local;
  }

  async updateLocal(
    id: string,
    updateLocalDTO: UpdateLocalDTO,
  ): Promise<Local> {
    const updatedLocal = await this.localModel.findByIdAndUpdate(
      id,
      updateLocalDTO,
      { new: true },
    );
    return updatedLocal;
  }
}
