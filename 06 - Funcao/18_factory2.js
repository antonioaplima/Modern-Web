// Factory functions são funções que retornam objetos

function criarProduto(nome, preco){
    let produtoGenerico ={
        nome: nome, 
        preco: preco,
        qnt: 0,
        qntIdeal: 0
    }
    return produtoGenerico;
}

console.log(criarProduto("Mesa", 300));