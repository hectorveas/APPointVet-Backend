import { Injectable } from '@nestjs/common';
import { SpecialistService } from '../../specialist/specialist.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private specialistService: SpecialistService) {}

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
}
