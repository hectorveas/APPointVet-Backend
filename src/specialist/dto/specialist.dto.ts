import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSpecialistDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(20, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly veterinary: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(30, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(30, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly lastName: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly specialties: string[];

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(10, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly rut: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(9, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly mail: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly password: string;
}

export class UpdateSpecialistDTO extends PartialType(CreateSpecialistDTO) {}
