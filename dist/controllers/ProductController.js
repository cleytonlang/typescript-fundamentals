"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutcController = void 0;
var CreateProduct_1 = __importDefault(require("../services/CreateProduct"));
function ProdutcController(req, res) {
    var product = CreateProduct_1.default({
        name: "Notebook",
        description: "Asus core i7 32GB",
        isValid: true,
        colors: ["Gray", "Blue", "Green"],
    });
    return product;
}
exports.ProdutcController = ProdutcController;
