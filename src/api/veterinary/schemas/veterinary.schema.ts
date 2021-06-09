import { Schema } from 'mongoose';

export const VeterinarySchema = new Schema({
  name: String,
  phone: String,
  address: String,
  specialties: [String],
});
