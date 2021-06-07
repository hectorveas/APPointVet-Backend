import { Schema } from 'mongoose';

export const AppointmentSchema = new Schema({
  pacient: String,
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: String,
  status: { type: Number, default: 3 },
  cancellationMotive: { type: String, default: '' },
  responsable: { type: String, default: '' },
});
