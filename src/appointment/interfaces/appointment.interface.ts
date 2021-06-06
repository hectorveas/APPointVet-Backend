import { Document } from 'mongoose';

export interface Appointment extends Document {
  // _id?: string;
  readonly pacient: string;
  readonly createdAt: Date;
  readonly description: string;
  readonly stateAppointment: number;
  readonly cancellationMotive?: string;
  readonly responsable?: string;
}
