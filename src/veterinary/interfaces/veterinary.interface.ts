import { Document } from 'mongoose';

export interface Veterinary extends Document {
  //_id?: string;
  readonly name: string;
  readonly phone: string;
  readonly address: string;
  readonly specialties: string[];
}
