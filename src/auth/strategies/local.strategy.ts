import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(mail: string, password: string) {
    const user = await this.authService.validateSpecialist(mail, password);
    if (!user) {
      const user = await this.authService.validatePetOwner(mail, password);
      if (!user) {
        throw new UnauthorizedException('not allow');
      }
      return user;
    }
    return user;
  }

  async validate1(mail: string, password: string) {
    const petOwner = await this.authService.validatePetOwner(mail, password);
    if (!petOwner) {
      throw new UnauthorizedException('not allow');
    }
    return petOwner;
  }
}
