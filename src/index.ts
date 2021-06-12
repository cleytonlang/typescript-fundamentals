import express from "express";
import { UserController } from "./controllers/UserController";
const app = express();

app.get("/", (req, res) => {
  const data = UserController(req, res);
  return res.json(data);
});
app.listen(3333);
