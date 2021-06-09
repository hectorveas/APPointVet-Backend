import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalRecordController } from './medical-record.controller';
import { MedicalRecordService } from './medical-record.service';
import { MedicalRecordSchema } from './schemas/medical-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MedicalRecord', schema: MedicalRecordSchema },
    ]),
  ],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
})
export class MedicalRecordModule {}
