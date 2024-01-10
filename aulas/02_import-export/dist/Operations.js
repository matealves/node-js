"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.subtrair = exports.somar = void 0;
// ########## exportar usando ES6
function somar(n1, n2) {
    return n1 + n2;
}
exports.somar = somar;
function subtrair(n1, n2) {
    return n1 - n2;
}
exports.subtrair = subtrair;
function multiplicar(n1, n2) {
    return n1 * n2;
}
exports.multiplicar = multiplicar;
// para exportar usando CommonJS (Node na versão antiga)
// module.exports = {
//   somar,
//   subtrair,
//   multiplicar,
// };
// export default {
//   somar,
//   subtrair,
//   multiplicar,
// };
