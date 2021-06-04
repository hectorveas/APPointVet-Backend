import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetOwnerController } from './pet-owner.controller';
import { PetOwnerService } from './pet-owner.service';
import { PetOwnerSchema } from './schemas/pet-owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PetOwner', schema: PetOwnerSchema }]),
  ],
  controllers: [PetOwnerController],
  providers: [PetOwnerService],
})
export class PetOwnerModule {}
