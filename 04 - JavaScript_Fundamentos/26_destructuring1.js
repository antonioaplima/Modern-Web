const pessoa = {
    nome: "Antônio",
    idade: 22,
    endereco:{
        logradouro: "Rua Dr. Mascarenhas",
        numero: 312
    }
}

console.log("Original:", pessoa.nome, pessoa.idade);

//Operador destructuring
const {nome, idade} = pessoa;
console.log("Fora do objeto:", nome, idade);

const {nome: n, idade: i} = pessoa;
console.log("Nome modificado:", n, i);

const {sobrenome, irritada = true} = pessoa;
console.log("Não existentes:", sobrenome, irritada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log("Em cascata:", logradouro, numero, cep);

//O original se mantém
console.log("Original:", pessoa.nome, pessoa.idade);