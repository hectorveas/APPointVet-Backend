import { Injectable } from '@nestjs/common';
import { SpecialistService } from '../../specialist/specialist.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Specialist } from 'src/specialist/interfaces/specialist.interface';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private specialistService: SpecialistService,
    private jwtService: JwtService,
  ) {}

  async validateSpecialist(mail: string, password: string) {
    const specialist = await this.specialistService.findByEmail(mail);
    if (specialist) {
      const isMatch = await bcrypt.compare(password, specialist.password);
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
}
