import { Schema } from 'mongoose';

export const SpecialistSchema = new Schema({
  veterinary: { type: String, default: '' },
  firstName: String,
  lastName: String,
  specialties: { type: String, default: null },
  rut: String,
  phone: String,
  mail: String,
  password: String,
  role: { type: String, default: 'specialist' },
});
