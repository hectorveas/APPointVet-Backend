import { Test, TestingModule } from '@nestjs/testing';
import { AttentionRecordController } from './attention-record.controller';

describe('AttentionRecordController', () => {
  let controller: AttentionRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttentionRecordController],
    }).compile();

    controller = module.get<AttentionRecordController>(
      AttentionRecordController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
