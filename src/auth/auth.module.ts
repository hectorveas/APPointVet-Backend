import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { SpecialistStrategy } from './strategies/specialist.strategy';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PetOwnerStrategy } from './strategies/petOwner.strategy.';
import { SpecialistModule } from './users/specialist/specialist.module';
import { PetOwnerModule } from './users/pet-owner/pet-owner.module';

@Module({
  imports: [
    PetOwnerModule,
    SpecialistModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '1h',
          },
        };
      },
    }),
  ],
  providers: [AuthService, SpecialistStrategy, PetOwnerStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
