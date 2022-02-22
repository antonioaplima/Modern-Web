//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);//Soma o primeiro com um "undefined" = Nan
imprimirSoma(2, 3, 4, 5);//Soma só os dois primeiros
imprimirSoma();//soma dois undefined = Nan

//Função com retorno
function soma(a, b = 1){
    return a + b;
}

console.log("soma 2 + 3 =", soma(2, 3));
console.log(soma(2));//como não possui "b", considerou = 1
