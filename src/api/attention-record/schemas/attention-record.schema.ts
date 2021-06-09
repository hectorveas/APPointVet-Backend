import { Schema } from 'mongoose';

export const AttentionRecordSchema = new Schema({
  //_id?: string;
  observation: String,
  weight: String,
  age: String,
  date: Date,
});
