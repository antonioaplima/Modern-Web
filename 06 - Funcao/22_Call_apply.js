function getPreco(imposto = 0, moeda = "R$"){
    this.imposto = imposto;
    this.moeda = moeda;

    return(`${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`);
}

const produto = {
    nome: "Notebook", 
    preco: 5000, 
    desconto: 0.15, 
    getPreco
}

console.log(produto.nome);
console.log(produto.getPreco());

global.preco = 20;
global.desconto = 0.1;
console.log(getPreco());//usa o global como referencia

const carro = {preco: 1000, desconto: 0.2}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.12, "$"));
console.log(getPreco.apply(carro, [0.12, "$"]));

