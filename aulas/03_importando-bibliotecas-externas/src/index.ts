// npm i validator
// npm i @types/validator
import validator from "validator";

const email = "mateus@alves.com.br";
const ip = "192.168.0.1";

console.log("email validator:", validator.isEmail(email));

console.log("IP validator:", validator.isIP(ip));
