import { Document } from 'mongoose';

export interface Schedule extends Document {
  //_id?: string;
  readonly veterinary: string;
  readonly specialist: string;
  readonly availablePlace: string;
  readonly dayAvailable: string;
  readonly hourAvailable: string;
}
