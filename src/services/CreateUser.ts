import { CreateUserData } from "../types/CreateUser";

export default function CreateUser({
  name,
  email,
  password,
  techs,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
