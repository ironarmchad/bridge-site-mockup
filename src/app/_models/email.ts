export class Email {
  firstname: string;
  lastname: string;
  toWhom: string[];
  message: string;
  address: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.address = '';
    this.toWhom = [];
    this.message = '';
  }
}
