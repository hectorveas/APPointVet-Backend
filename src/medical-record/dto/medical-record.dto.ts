import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateMedicalRecordDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(20, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly breed: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(1000, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly weight: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(100, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly age: string;
}

export class UpdateMedicalRecordDTO extends PartialType(
  CreateMedicalRecordDTO,
) {}
