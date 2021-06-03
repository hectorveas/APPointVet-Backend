import { Schema } from 'mongoose';

export const VeterinarySchema = new Schema({
  name: String,
  phone: Date,
  address: String,
  specialties: [String],
});
