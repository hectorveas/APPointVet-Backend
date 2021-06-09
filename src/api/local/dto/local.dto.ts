import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateLocalDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(50, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly ubication: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(20, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(0, {
    message: 'input incorrecto',
  })
  @MaxLength(20, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly localType: string;
}

export class UpdateLocalDTO extends PartialType(CreateLocalDTO) {}
