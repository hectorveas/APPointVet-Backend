import {
  IsString,
  IsNotEmpty,
  IsArray,
  MinLength,
  MaxLength,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateVeterinaryDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto chupa benja',
  })
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto chupa benja',
  })
  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  readonly specialties: string[];
}

export class UpdateVeterinaryDTO extends PartialType(CreateVeterinaryDTO) {}
