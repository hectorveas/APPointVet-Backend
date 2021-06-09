import { Injectable } from '@nestjs/common';
import { SpecialistService } from '../users/specialist/specialist.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Specialist } from '../users/specialist/interfaces/specialist.interface';
import { PayloadToken } from '../models/token.model';
import { PetOwner } from '../users/pet-owner/interfaces/pet-owner.interface';
import { PetOwnerService } from '../users/pet-owner/pet-owner.service';

@Injectable()
export class AuthService {
  constructor(
    private specialistService: SpecialistService,
    private petOwnerService: PetOwnerService,
    private jwtService: JwtService,
  ) {}

  async validateSpecialist(mail: string, password: string) {
    const specialist = await this.specialistService.findByEmail(mail);
    if (specialist) {
      const isMatch = bcrypt.compare(password, specialist.password);
      if (isMatch) {
        const { password, ...rta } = specialist.toJSON();
        return rta;
      }
    }
    return null;
  }

  async generateSpecialistJWT(user: Specialist) {
    const payload: PayloadToken = { role: user.mail, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async validatePetOwner(mail: string, password: string) {
    const petOwner = await this.petOwnerService.findByEmail(mail);
    if (petOwner) {
      const isMatch = bcrypt.compare(password, petOwner.password);
      if (isMatch) {
        const { password, ...rta } = petOwner.toJSON();
        return rta;
      }
    }
    return null;
  }

  async generatePetOwnerJWT(user: PetOwner) {
    const payload: PayloadToken = { role: user.mail, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
