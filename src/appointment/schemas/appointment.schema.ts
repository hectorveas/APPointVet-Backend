import { Schema } from 'mongoose';

export const AppointmentSchema = new Schema({
  pacient: String,
  date: Date,
  createdAt: Date,
  description: String,
  status: { type: String, default: 3 },
  cancellationMotive: String,
  responsable: String,
});
