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
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
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
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
