"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateProduct(_a) {
    var name = _a.name, description = _a.description, isValid = _a.isValid, colors = _a.colors;
    var product = {
        name: name,
        description: description,
        isValid: isValid,
        colors: colors,
    };
    return product;
}
exports.default = CreateProduct;
