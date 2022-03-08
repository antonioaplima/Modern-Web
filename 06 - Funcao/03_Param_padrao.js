//Estratégia 1 para valor padrão

//Obrigando os valores a não serem null and undefined
function soma(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
 console.log(soma());
 console.log(soma(3));
 console.log(soma(1, 2, 3));
 console.log(soma(0, 0, 0));