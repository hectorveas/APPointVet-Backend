import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateMedicalRecordDTO,
  UpdateMedicalRecordDTO,
} from './dto/medical-record.dto';
import { MedicalRecord } from './interfaces/medical-record.interface';

@Injectable()
export class MedicalRecordService {
  constructor(
    @InjectModel('MedicalRecord')
    private readonly medicalRecordModel: Model<MedicalRecord>,
  ) {}

  async createMedicalRecord(
    createMedicalRecordDTO: CreateMedicalRecordDTO,
  ): Promise<MedicalRecord> {
    const newMedicalRecord = new this.medicalRecordModel(
      createMedicalRecordDTO,
    );
    return newMedicalRecord.save();
  }

  async getMedicalRecords(): Promise<MedicalRecord[]> {
    const medicalRecords = await this.medicalRecordModel.find();
    return medicalRecords;
  }

  async getMedicalRecord(id: string): Promise<MedicalRecord> {
    const medicalRecord = await this.medicalRecordModel.findById(id);
    return medicalRecord;
  }

  async deleteMedicalRecord(id: string): Promise<any> {
    const medicalRecord = await this.medicalRecordModel.findByIdAndDelete(id);
    return medicalRecord;
  }

  async updateMedicalRecord(
    id: string,
    updateMedicalRecordDTO: UpdateMedicalRecordDTO,
  ): Promise<MedicalRecord> {
    const updatedMedicalRecord =
      await this.medicalRecordModel.findByIdAndUpdate(
        id,
        updateMedicalRecordDTO,
        { new: true },
      );
    return updatedMedicalRecord;
  }
}
