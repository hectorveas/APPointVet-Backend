import { Schema } from 'mongoose';

export const LocalSchema = new Schema({
  //_id?: string;
  ubication: String,
  city: String,
  localType: String,
});
