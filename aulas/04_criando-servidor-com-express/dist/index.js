"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i validator
// npm i @types/validator
const validator_1 = __importDefault(require("validator"));
const email = "mateus@alves.com";
const ip = "192.168.0.1";
console.log("email validade:", validator_1.default.isEmail(email));
console.log("IP validade:", validator_1.default.isIP(ip));
