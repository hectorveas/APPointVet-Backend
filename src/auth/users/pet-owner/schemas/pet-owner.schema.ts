import { Schema } from 'mongoose';

export const PetOwnerSchema = new Schema({
  //_id?: string;
  firstName: String,
  lastName: String,
  phone: String,
  rut: String,
  mail: String,
  address: { type: String, default: '' },
  password: String,
  pets: { type: String, default: null },
  veterinaries: { type: String, default: null },
  role: { type: String, default: 'petOwner' },
  lastConection: { type: Date, default: Date.now },
});
