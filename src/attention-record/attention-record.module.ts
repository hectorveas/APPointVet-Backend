import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttentionRecordController } from './attention-record.controller';
import { AttentionRecordService } from './attention-record.service';
import { AttentionRecordSchema } from './schemas/attention-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AttentionRecord', schema: AttentionRecordSchema },
    ]),
  ],
  controllers: [AttentionRecordController],
  providers: [AttentionRecordService],
})
export class AttentionRecordModule {}
