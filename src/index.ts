import express from "express";
import { UserController } from "./controllers/UserController";
import { ProdutcController } from "./controllers/ProductController";
const app = express();

app.get("/users", (req, res) => {
  const data = UserController(req, res);
  return res.json(data);
});

app.get("/products", (req, res) => {
  const data = ProdutcController(req, res);
  return res.json(data);
});

app.listen(3333);
