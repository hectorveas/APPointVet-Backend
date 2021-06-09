import { Test, TestingModule } from '@nestjs/testing';
import { VeterinaryController } from './veterinary.controller';

describe('VeterinaryController', () => {
  let controller: VeterinaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeterinaryController],
    }).compile();

    controller = module.get<VeterinaryController>(VeterinaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
