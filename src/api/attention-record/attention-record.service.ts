import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateAttentionRecordDTO,
  UpdateAttentionRecordDTO,
} from './dto/attention-record.dto';
import { AttentionRecord } from './interfaces/attention-record.interface';

@Injectable()
export class AttentionRecordService {
  constructor(
    @InjectModel('AttentionRecord')
    private readonly attentionRecordModel: Model<AttentionRecord>,
  ) {}

  async createAttentionRecord(
    createAttentionRecordDTO: CreateAttentionRecordDTO,
  ): Promise<AttentionRecord> {
    const newAttentionRecord = new this.attentionRecordModel(
      createAttentionRecordDTO,
    );
    return newAttentionRecord.save();
  }

  async getAttentionRecords(): Promise<AttentionRecord[]> {
    const attentionRecords = await this.attentionRecordModel.find();
    return attentionRecords;
  }

  async getAttentionRecord(id: string): Promise<AttentionRecord> {
    const attentionRecord = await this.attentionRecordModel.findById(id);
    return attentionRecord;
  }

  async deleteAttentionRecord(id: string): Promise<any> {
    const attentionRecord = await this.attentionRecordModel.findByIdAndDelete(
      id,
    );
    return attentionRecord;
  }

  async updateAttentionRecord(
    id: string,
    updateAttentionRecordDTO: UpdateAttentionRecordDTO,
  ): Promise<AttentionRecord> {
    const updatedAttentionRecord =
      await this.attentionRecordModel.findByIdAndUpdate(
        id,
        updateAttentionRecordDTO,
        { new: true },
      );
    return updatedAttentionRecord;
  }
}
