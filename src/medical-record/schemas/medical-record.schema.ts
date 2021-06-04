import { Schema } from 'mongoose';

export const MedicalRecordSchema = new Schema({
  //_id?: string;
  //pet: string,
  breed: String,
  weight: String,
  age: String,
});
