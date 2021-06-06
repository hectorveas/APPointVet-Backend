import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePetOwnerDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(20, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly name: string;

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
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly passWord: string;

  @IsArray()
  @IsNotEmpty()
  readonly pets: string[];

  @IsArray()
  @IsNotEmpty()
  readonly veterinaries: string[];
}

export class UpdatePetOwnerDTO extends PartialType(CreatePetOwnerDTO) {}
