export class TransmissionType {
  serial_number: string;
  type: string;


  constructor(type: string, serial_number?: string) {
    this.serial_number = serial_number;
    this.type = type;
  }
}
