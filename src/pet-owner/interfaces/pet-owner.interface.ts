import { Document } from 'mongoose';

export interface PetOwner extends Document {
  //_id?: string;
  readonly name: string;
  readonly phone: string;
  readonly rut: string;
  readonly mail: string;
  readonly address: string;
  password: string;
  readonly pets: string[];
  readonly veterinaries: string[];
  readonly role: string;
}
