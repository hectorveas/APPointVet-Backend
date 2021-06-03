export class CreateVaccineDTO {
  //_id?: string;
  readonly dose: string;
  readonly component: string;
  readonly dateExpiry: Date;
  readonly associatedDisease: string;
}
