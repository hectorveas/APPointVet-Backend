import { Test, TestingModule } from '@nestjs/testing';
import { AttentionRecordService } from './attention-record.service';

describe('AttentionRecordService', () => {
  let service: AttentionRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttentionRecordService],
    }).compile();

    service = module.get<AttentionRecordService>(AttentionRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
