"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function userController(req, res) {
    var user = CreateUser_1.default({
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
exports.userController = userController;
