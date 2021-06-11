import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function userController(req: Request, res: Response) {
  const user = createUser({
    name: "Cleyton",
    email: "cleytonb40@gmail",
    password: "123456",
    techs: [
      "NodeJS",
      "React",
      "NextJS",
      { title: "Typescript", experience: 90 },
    ],
  });

  return user;
}
