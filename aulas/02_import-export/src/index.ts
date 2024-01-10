// ########## importar usando CommonJS (Node na versão antiga)
// const Operations = require("./Operations");

// const n1: number = 125;
// const n2: number = 6;

// console.log(`MUlTIPLICAÇÂO: ${Operations.multiplicar(n1, n2)}`);

// ########## importar do export default
// import Operations from "./Operations";

// const n1: number = 35;
// const n2: number = 14;

// console.log(`SOMA: ${Operations.somar(n1, n2)}`);

// ########## importar usando ES6
import * as Operations from "./Operations";
import { somar, subtrair, multiplicar } from "./Operations";

const n1: number = 49;
const n2: number = 13;

console.log(`SOMA: ${Operations.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${subtrair(n1, n2)}`);
console.log(`MUlTIPLICAÇÂO: ${multiplicar(n1, n2)}`);
