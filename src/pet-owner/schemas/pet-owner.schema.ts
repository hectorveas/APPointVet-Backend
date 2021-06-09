import { Schema } from 'mongoose';

export const PetOwnerSchema = new Schema({
  //_id?: string;
  firstName: String,
  lastName: String,
  phone: String,
  rut: String,
  mail: String,
  address: String,
  password: String,
  pets: [String],
  veterinaries: [String],
  role: { type: String, default: 'petOwner' },
});
