/*  O let faz distinção entre blocos, funções e global
    Dessa forma é possível ter variáveis com o mesmo nome no escopo de um bloco, 
    no escopo de uma função e no escopo global com valores distintos
*/

let num = 1;

{
    let num = 2;
    console.log("dentro =", num);
}

console.log("fora =", num);