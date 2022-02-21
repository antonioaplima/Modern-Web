let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Transformando isAtivo para number 
isAtivo = 1;

//Agora quero verificar se 1 é verdadeira
//É possível forçar o boolear colocando duas negações
console.log(!!isAtivo);

//Ou negar a variável
console.log(!isAtivo);

//Zero é false
console.log(!!0);

//numeros != 0 são true
console.log(!!1);

//Casos verdadeiros
console.log("Casos verdadeiros:")
console.log(!!3);
console.log(!!-1);
console.log(!!"string não vazia");
console.log(!!Infinity);
console.log(!![]);
console.log(!!{});

//Casos falsos
console.log("Casos falsos:");
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

//Example:

let nome = "";//String vazia -> false
console.log(nome || "String vazia");

nome = "Antônio";
console.log(nome || "String vazia");
