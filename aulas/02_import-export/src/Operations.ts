// ########## exportar usando ES6
export function somar(n1: number, n2: number): number {
  return n1 + n2;
}

export function subtrair(n1: number, n2: number): number {
  return n1 - n2;
}

export function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

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
