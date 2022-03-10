//Estratégia 1 para valor padrão
//Obrigando os valores a não serem null and undefined
function soma(a, b, c){
    a = a || 1;//Se "a" for falso a = 1
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log("Soma: ");
 console.log(soma());
 console.log(soma(3));
 console.log(soma(1, 2, 3));
 console.log(soma(0, 0, 0));

//Outras estratégias
function soma2(a, b, c){
    a = a != undefined ? a : 1;//a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;//Se o parâmetro "b" (que está no indice 1) existe então recebe b, senão recebe 1
    c = isNaN(c) ? 1 : c;//Mais segura das comparações
    return(a + b + c);
}

console.log("Soma2: ");
console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

//Valor padrão do ES2015: mais atual -> use desta forma
function soma3(a=1, b=1, c=1){
    return a+b+c;
}

console.log("Soma3: ");
console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));