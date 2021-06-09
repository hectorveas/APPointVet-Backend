import { Test, TestingModule } from '@nestjs/testing';
import { PetOwnerController } from './pet-owner.controller';

describe('PetOwnerController', () => {
  let controller: PetOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetOwnerController],
    }).compile();

    controller = module.get<PetOwnerController>(PetOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
