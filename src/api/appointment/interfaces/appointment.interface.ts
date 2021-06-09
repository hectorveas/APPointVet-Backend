import { Document } from 'mongoose';

export interface Appointment extends Document {
  // _id?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt?: Date;
  readonly description: string;
  readonly date: Date;
  readonly status?: number;
  readonly cancellationMotive?: string;
  readonly responsable?: string;
}
