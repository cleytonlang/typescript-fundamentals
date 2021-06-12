import { Request, Response } from "express";
import createProduct from "../services/CreateProduct";

export function ProdutcController(req: Request, res: Response) {
  const product = createProduct({
    name: "Notebook",
    description: "Asus core i7 32GB",
    isValid: true,
    colors: ["Gray", "Blue", "Green"],
  });

  return product;
}
