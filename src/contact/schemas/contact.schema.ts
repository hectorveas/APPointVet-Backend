import { Schema } from 'mongoose';

export const ContactSchema = new Schema({
  //_id?: string;
  name: String,
  lastName: String,
  rut: String,
  mail: String,
  consult: String,
  DateRequest: Date,
});
