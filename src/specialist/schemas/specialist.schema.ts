import { Schema } from 'mongoose';

export const SpecialistSchema = new Schema({
  veterinary: String,
  name: String,
  specialties: [String],
  rut: String,
  phone: String,
  mail: String,
  password: String,
  role: { type: String, default: 'specialist' },
});
