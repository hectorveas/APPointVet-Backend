import { Schema } from 'mongoose';

export const VaccineSchema = new Schema({
  dose: String,
  component: String,
  dateExpiry: Date,
  associatedDisease: String,
});
