import { Schema } from 'mongoose';

export const SpecialistSchema = new Schema({
  veterinary: String,
  firstName: String,
  lastName: String,
  specialties: [String],
  rut: String,
  phone: String,
  mail: String,
  password: String,
  role: { type: String, default: 'specialist' },
});
