//Pesos
let number1 = 7.3;
let number2 = 8;

console.log(number1, number2);
console.log(Number.isInteger(number1));
console.log(Number.isInteger(number2));

//Notas
let nota1 = 6;
let nota2 = 9.563;

const total = ((number1 * nota1) + (number2 * nota2))/(number1 + number2);
console.log(total);

//Apenas interfere na exibição das casas decimais
console.log(total.toFixed(2));

//Transforma "total" em string
console.log(total.toString());

//Transforma total em string binário
console.log(total.toString(2));

console.log(Number.isInteger(total));
