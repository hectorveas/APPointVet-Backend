import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePetDTO {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(30, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly name: string;
}

export class UpdatePetDTO extends PartialType(CreatePetDTO) {}
