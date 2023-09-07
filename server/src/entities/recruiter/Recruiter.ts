export interface RecruiterData {
  name: string;
  email: string;
  password: string;
  phone: number;
  companyName: string;
}

export class RecruiterProfile {
  name: string;
  email: string;
  password: string;
  phone: number;
  companyName: string;

  constructor({ name, email, password, phone, companyName }: RecruiterData) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.companyName = companyName;
  }
}
