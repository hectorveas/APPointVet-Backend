import { Schema } from 'mongoose';

export const OwnerSchema = new Schema({
  //_id?: string;
  name: String,
  phone: String,
  rut: String,
  mail: String,
  address: String,
  password: String,
});
