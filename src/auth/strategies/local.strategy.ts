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
    const Specialist = await this.authService.validateSpecialist(
      mail,
      password,
    );
    if (!Specialist) {
      throw new UnauthorizedException('not allow');
    }
    return Specialist;
  }
}
