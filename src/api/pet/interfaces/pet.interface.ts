import { Document } from 'mongoose';

export interface Pet extends Document {
  //_id?: string;
  readonly name: string;
}
