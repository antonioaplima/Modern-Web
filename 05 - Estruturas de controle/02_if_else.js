const imprimirResultado = function(nota){
    if(nota>=7){
        console.log(nota, "-> Aprovado");
    }else{
        console.log(nota, "-> Reprovado");
    }
}

imprimirResultado(5);
imprimirResultado(6);
imprimirResultado(6.9);
imprimirResultado(7);
imprimirResultado(8);
imprimirResultado(9);
imprimirResultado(10);

imprimirResultado("Epa!");//Cuidado
