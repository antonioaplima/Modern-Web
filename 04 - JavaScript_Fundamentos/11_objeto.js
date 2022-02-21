const produto = {};
produto.nome = "Barbeador";
produto.preco = 19.99;
console.log(produto);

//Mudando o valor da chave preco
produto.preco = 1.99;
console.log(produto);

//Criando objetos dentro de objetos
const produto2 ={
    nome: "Faca",
    preco: 20,
    tipo: "Ferramenta",
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(produto2);