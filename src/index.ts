import express from "express";
import { userController } from "./controller";
const app = express();

app.get("/", (req, res) => {
  const data = userController(req, res);
  return res.json(data);
});
app.listen(3333);
