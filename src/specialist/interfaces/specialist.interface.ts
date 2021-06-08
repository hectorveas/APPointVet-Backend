import { Document } from 'mongoose';

export interface Specialist extends Document {
  //_id?: string;
  readonly veterinary: string;
  readonly name: string;
  readonly specialties: string[];
  readonly rut: string;
  readonly phone: string;
  readonly mail: string;
  password: string;
  readonly role: string;
}
