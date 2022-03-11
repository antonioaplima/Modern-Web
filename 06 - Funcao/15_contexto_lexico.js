const valor = "Global";

function minhaFuncao(){
    console.log(valor);
}

minhaFuncao();

function exec(){
    const valor = "Local";
    minhaFuncao();
    //Não vai imprimir "Local", pois ela foi definida em outro contexto léxico
}

exec();
