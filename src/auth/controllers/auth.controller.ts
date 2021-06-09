import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { Specialist } from '../users/specialist/interfaces/specialist.interface';
import { PetOwner } from '../users/pet-owner/interfaces/pet-owner.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auths')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('specialist'))
  @Post('login/specialist')
  loginSpecialist(@Req() req: Request) {
    const user = req.user as Specialist;
    return this.authService.generateSpecialistJWT(user);
  }

  @UseGuards(AuthGuard('petOwner'))
  @Post('login/pet-owner')
  loginPetOwner(@Req() req: Request) {
    const user = req.user as PetOwner;
    return this.authService.generatePetOwnerJWT(user);
  }
}
