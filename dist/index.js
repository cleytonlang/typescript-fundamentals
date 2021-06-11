"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var app = express_1.default();
app.get("/", function (req, res) {
    var data = controller_1.userController(req, res);
    return res.json(data);
});
app.listen(3333);
