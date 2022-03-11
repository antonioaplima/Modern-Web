// Factory functions são funções que retornam objetos

const prod1 = {
    nome: "Nome", 
    preco: 45,
    qnt: 300
}

function criarObjeto(){
    return{
        nome: "Mesa", 
        preco: 2,
        qnt: 500,
        qntIdeal: 963
    }
}

console.log(criarObjeto());