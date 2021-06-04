import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialistSchema } from './schemas/specialist.schema';
import { SpecialistController } from './specialist.controller';
import { SpecialistService } from './specialist.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Specialist', schema: SpecialistSchema },
    ]),
  ],
  controllers: [SpecialistController],
  providers: [SpecialistService],
})
export class SpecialistModule {}
