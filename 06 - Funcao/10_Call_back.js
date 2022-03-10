const fabricantesDeCarro = ["Mercedes", "Chev", "Ford", "Audi"];

function imprimir(nome, indice, array){
    console.log((indice + 1), "->", nome, array);
}

/*Teste
function imprimir2(array, nome, indice){
    console.log((indice + 1), "->", nome, array);
}
*/

fabricantesDeCarro.forEach(imprimir);
//fabricantesDeCarro.forEach(imprimir2); Teste 

//A função forEach recebe três parâmetros sempre nessa ordem
//Conteúdo, indice, array 