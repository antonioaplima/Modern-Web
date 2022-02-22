//Armazenando função dentro de uma variável

const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando uma função arrow dentro de uma variável

const soma = (a, b) => {
    return(a + b);
}

console.log(soma(2,3));

//Retorno implícito arrow function

//Se a função possui apenas uma sentença o return é implícito
//Retornará o valor ou undefined 
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimirNumber = a => console.log(a);
imprimirNumber(2);