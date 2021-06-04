import { Document } from 'mongoose';

export interface MedicalRecord extends Document {
  //_id?: string;
  //readonly pet: string;
  readonly breed: string;
  readonly weight: string;
  readonly age: string;
}
