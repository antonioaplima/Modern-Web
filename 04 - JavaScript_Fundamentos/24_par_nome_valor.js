//  Par chave-valor

const saudacao = "Opa";//contexto léxico 1

function exec(){
    const saudacao = "Faala";//contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: "Antônio",
    idade: "22",
    sexo: "m",
    peso: 73.5
}

console.log(saudacao);
console.log(exec());
console.log(cliente);


