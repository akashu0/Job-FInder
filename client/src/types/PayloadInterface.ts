export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends LoginPayload {
  name: string;
  phone: string;
  confirmPassword: string;
}

export interface UserDataPayload {
  _id: any;
  userId: {
    name: string;
    email: string;
    password: string;
    phone: number;
    is_Admin: boolean;
    version: number;
    id: string;
  };
  age: number;
  is_Active?: boolean;
  education?: string;
  salary?: string;
  bio?: string;
  workmode?: string;
  project?: string;
  skill?: Array<string>;
  link?: Array<string>;
  createdAt?: Date;
  image?: string;
  previousrole: string;
  experirnce: string;
}
