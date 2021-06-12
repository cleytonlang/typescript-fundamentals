interface TechObject {
  title: string;
  experience: number;
}

export interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}
