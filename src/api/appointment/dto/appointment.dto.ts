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
  readonly firstNameOwner: string; //1

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly lastNameOwner: string; //1

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly firstName: string; //1

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto',
  })
  @ApiProperty()
  readonly lastName: string; //1

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

export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO) {
  @IsInt()
  @Min(1)
  @Max(4)
  @IsNotEmpty()
  readonly status: number; //default 3
}

/*
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
readonly responsable?: string */
