import { Document } from 'mongoose';

export interface Vaccine extends Document {
  //_id?: string;
  readonly dose: string;
  readonly component: string;
  readonly dateExpiry: Date;
  readonly associatedDisease: string;
}
