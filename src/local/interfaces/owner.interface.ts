import { Document } from 'mongoose';

export interface Owner extends Document {
  //_id?: string;
  readonly name: string;
  readonly phone: string;
  readonly rut: string;
  readonly mail: string;
  readonly address: string;
  readonly password: string;
}
