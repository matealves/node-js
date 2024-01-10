"use strict";
// ########## importar usando CommonJS (Node na versão antiga)
// const Operations = require("./Operations");
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const n1: number = 125;
// const n2: number = 6;
// console.log(`MUlTIPLICAÇÂO: ${Operations.multiplicar(n1, n2)}`);
// ########## importar do export default
// import Operations from "./Operations";
// const n1: number = 35;
// const n2: number = 14;
// console.log(`SOMA: ${Operations.somar(n1, n2)}`);
// ########## importar usando ES6
const Operations = __importStar(require("./Operations"));
const Operations_1 = require("./Operations");
const n1 = 49;
const n2 = 13;
console.log(`SOMA: ${Operations.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${(0, Operations_1.subtrair)(n1, n2)}`);
console.log(`MUlTIPLICAÇÂO: ${(0, Operations_1.multiplicar)(n1, n2)}`);
