import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDateString,
  // IsInt,
  // Min,
  // Max,
  // IsEmpty,
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
  readonly pacient: string; //1

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date; //1

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(100, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly description: string; //1
}

export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO) {}

/*
@IsInt()
@Min(1)
@Max(4)
@IsEmpty()
readonly status?: 3; //default 3

@IsString()
@MinLength(0, {
  message: 'input incorrecto',
})
@MaxLength(50, {
  message: 'input incorrecto',
})
@ApiProperty()
@IsEmpty()
readonly cancellationMotive?: string;

@IsString()
@MinLength(0, {
  message: 'input incorrecto',
})
@MaxLength(50, {
  message: 'input incorrecto',
})
@ApiProperty()
@IsEmpty()
readonly responsable?: string;

@IsDateString()
@IsEmpty()
@ApiProperty()
readonly createdAt?: Date;
*/
