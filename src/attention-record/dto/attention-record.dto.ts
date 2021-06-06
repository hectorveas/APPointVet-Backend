import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDateString,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';


export class CreateAttentionRecordDTO {
 
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly observation: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(3, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly weight: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(2, {
    message: 'input incorrecto',
  })
  @ApiProperty()

  readonly age: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  
  readonly date: Date;
}

export class UpdateAttentionRecordDTO extends PartialType(CreateAttentionRecordDTO) {}