import { Document } from 'mongoose';

export interface Contact extends Document {
  //_id?: string;
  readonly name: string;
  readonly lastName: string;
  readonly rut: string;
  readonly mail: string;
  readonly description: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
