import { Schema } from 'mongoose';

export const AppointmentSchema = new Schema({
  pacient: String,
  createdAt: Date,
  description: String,
  status: Number,
  cancellationMotive: String,
  responsable: String,
});
