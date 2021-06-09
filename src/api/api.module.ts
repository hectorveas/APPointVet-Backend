import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointment/appointment.module';
import { AttentionRecordModule } from './attention-record/attention-record.module';
import { ContactModule } from './contact/contact.module';
import { LocalModule } from './local/local.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { OwnerModule } from './owner/owner.module';
import { PetModule } from './pet/pet.module';
import { ScheduleModule } from './schedule/schedule.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { VeterinaryModule } from './veterinary/veterinary.module';

@Module({
  imports: [
    AppointmentModule,
    AttentionRecordModule,
    ContactModule,
    LocalModule,
    MedicalRecordModule,
    OwnerModule,
    PetModule,
    ScheduleModule,
    VaccineModule,
    VeterinaryModule,
  ],
})
export class ApiModule {}
