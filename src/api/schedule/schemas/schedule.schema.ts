import { Schema } from 'mongoose';

export const ScheduleSchema = new Schema({
  veterinary: String,
  specialist: String,
  availablePlace: String,
  dayAvailable: String,
  hourAvailable: String,
});
