import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDateString,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateVaccineDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly dose: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly component: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  readonly dateExpiry: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly associatedDisease: string;
}

export class UpdateVaccineDTO extends PartialType(CreateVaccineDTO) {}
