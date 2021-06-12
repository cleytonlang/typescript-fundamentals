"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface TechObject {
//   title: string;
//   experience: number;
// }
// interface CreateUserData {
//   name?: string;
//   email: string;
//   password: string;
//   techs: Array<string | TechObject>;
// }
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
    };
    return user;
}
exports.default = createUser;
