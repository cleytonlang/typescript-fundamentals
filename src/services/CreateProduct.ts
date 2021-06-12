import { CreateProductData } from "../types/CreateProducts";

export default function CreateProduct({
  name,
  description,
  isValid,
  colors
}: CreateProductData) {
  const product = {
    name,
    description,
    isValid,
    colors,
  };

  return product;
}
