"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("./controllers/UserController");
var app = express_1.default();
app.get("/", function (req, res) {
    var data = UserController_1.UserController(req, res);
    return res.json(data);
});
app.listen(3333);
