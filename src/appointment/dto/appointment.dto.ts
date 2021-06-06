import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDateString,
  IsInt,
  Min,
  Max,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDTO {
  //_id?: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly pacient: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  readonly createdAt: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(100, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly description: string;

  @IsInt()
  @Min(1)
  @Max(3)
  readonly stateAppointment: number;

  @IsString()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly cancellationMotive?: string;

  @IsString()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly responsable?: string;
}

export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO) {}
