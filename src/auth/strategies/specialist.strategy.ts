import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class SpecialistStrategy extends PassportStrategy(
  Strategy,
  'specialist',
) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(mail: string, password: string) {
    const user = await this.authService.validateSpecialist(mail, password);
    if (!user) {
      throw new UnauthorizedException('not allow');
    }
    return user;
  }
}
