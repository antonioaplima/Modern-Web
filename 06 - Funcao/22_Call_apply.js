function getPreco(imposto = 0, moeda = "R$"){
    this.imposto = imposto;
    this.moeda = moeda;

    return(`${moeda} ${this.preco * this.desconto * (1 + imposto)}`);
}

const produto = {
    nome: "Notebook", 
    preco: 5000, 
    desconto: 0.15, 
    getPreco
}

globalThis.preco = 20;
globalThis.desconto = 0.3;
console.log(getPreco());