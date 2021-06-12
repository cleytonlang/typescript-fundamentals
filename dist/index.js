"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("./controllers/UserController");
var ProductController_1 = require("./controllers/ProductController");
var app = express_1.default();
app.get("/users", function (req, res) {
    var data = UserController_1.UserController(req, res);
    return res.json(data);
});
app.get("/products", function (req, res) {
    var data = ProductController_1.ProdutcController(req, res);
    return res.json(data);
});
app.listen(3333);
