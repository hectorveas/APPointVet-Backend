import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeterinaryModule } from './veterinary/veterinary.module';
import { OwnerModule } from './owner/owner.module';
import { PetOwnerModule } from './pet-owner/pet-owner.module';
import { PetModule } from './pet/pet.module';
import { SpecialistModule } from './specialist/specialist.module';
import { ScheduleModule } from './schedule/schedule.module';
import { LocalModule } from './local/local.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { ContactModule } from './contact/contact.module';
import { AttentionRecordModule } from './attention-record/attention-record.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Appointvet-master'),
    VeterinaryModule,
    OwnerModule,
    PetOwnerModule,
    PetModule,
    SpecialistModule,
    ScheduleModule,
    LocalModule,
    VaccineModule,
    MedicalRecordModule,
    ContactModule,
    AttentionRecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
