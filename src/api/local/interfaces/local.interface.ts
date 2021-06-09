import { Document } from 'mongoose';

export interface Local extends Document {
  //_id?: string;
  readonly ubication: string;
  readonly city: string;
  readonly localType: string;
}
