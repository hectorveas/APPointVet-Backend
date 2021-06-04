import { Document } from 'mongoose';

export interface AttentionRecord extends Document {
  //_id?: string;
  readonly observation: string;
  readonly weight: string;
  readonly age: string;
  readonly date: Date;
}
