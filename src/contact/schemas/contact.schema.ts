import { Schema } from 'mongoose';

export const ContactSchema = new Schema({
  //_id?: string;
  name: String,
  lastName: String,
  rut: String,
  mail: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
