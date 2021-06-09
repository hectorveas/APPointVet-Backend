import { Document } from 'mongoose';

export interface Specialist extends Document {
  //_id?: string;
  readonly veterinary: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly specialties: string[];
  readonly rut: string;
  readonly phone: string;
  readonly mail: string;
  password: string;
  readonly role: string;
}
