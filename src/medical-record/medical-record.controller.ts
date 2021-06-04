import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateMedicalRecordDTO } from './dto/medical-record.dto';
import { MedicalRecordService } from './medical-record.service';

@Controller('medical-record')
export class MedicalRecordController {
  constructor(private medicalRecordService: MedicalRecordService) {}

  @Post()
  async createMedicalRecord(
    @Res() res,
    @Body() createMedicalRecordDTO: CreateMedicalRecordDTO,
  ) {
    const medicalRecord = await this.medicalRecordService.createMedicalRecord(
      createMedicalRecordDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'MedicalRecord Successfully Created',
      medicalRecord,
    });
  }

  @Get()
  async getMedicalRecords(@Res() res) {
    const medicalRecord = await this.medicalRecordService.getMedicalRecords();
    return res.status(HttpStatus.OK).json(medicalRecord);
  }

  @Get('/:id')
  async getMedicalRecord(@Res() res, @Param('id') id) {
    const medicalRecord = await this.medicalRecordService.getMedicalRecord(id);
    if (!medicalRecord)
      throw new NotFoundException('MedicalRecord does not exist!');
    return res.status(HttpStatus.OK).json(medicalRecord);
  }

  @Delete()
  async deleteMedicalRecord(@Res() res, @Query('id') id) {
    const medicalRecord = await this.medicalRecordService.deleteMedicalRecord(
      id,
    );
    if (!medicalRecord)
      throw new NotFoundException('MedicalRecord does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'MedicalRecord Deleted Successfully',
      medicalRecord,
    });
  }

  @Put()
  async updateMedicalRecord(
    @Res() res,
    @Body() createMedicalRecordDTO: CreateMedicalRecordDTO,
    @Query('id') id,
  ) {
    const medicalRecord = await this.medicalRecordService.updateMedicalRecord(
      id,
      createMedicalRecordDTO,
    );
    if (!medicalRecord)
      throw new NotFoundException('MedicalRecord does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'MedicalRecord Updated Successfully',
      medicalRecord,
    });
  }
}
