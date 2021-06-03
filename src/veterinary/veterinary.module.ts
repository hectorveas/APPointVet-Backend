import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeterinarySchema } from './schemas/veterinary.schema';
import { VeterinaryController } from './veterinary.controller';
import { VeterinaryService } from './veterinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Veterinary', schema: VeterinarySchema },
    ]),
  ],
  controllers: [VeterinaryController],
  providers: [VeterinaryService],
})
export class VeterinaryModule {}
