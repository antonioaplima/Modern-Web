Number.prototype.entre = function (inicio, fim){
    console.log(this);
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log("Destaque");
    }else if(nota.entre(7, 8.999)){
        console.log("Aprovado");
    }else if(nota.entre(5, 6.999)){
        console.log("Recuperação");
    }else if(nota.entre(0, 4.999)){
        console.log("Reprovado");
    }else{
        console.log("Nota inválida");
    }
}

imprimirResultado(-1);
imprimirResultado(1);
imprimirResultado(5.5);
imprimirResultado(7.5);
imprimirResultado(9.5);
imprimirResultado(11);
