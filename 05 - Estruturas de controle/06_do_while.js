function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

//Executa um repetição obrigatória antes de verificar a condição
do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida: ${opcao}.`);
}while(opcao != -1);

console.log("End");