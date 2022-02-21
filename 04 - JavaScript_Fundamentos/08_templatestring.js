const nome = "Antônio";
const concatenação = nome + "Augusto";

const template = `${nome}

Augusto`

console.log(concatenação);
console.log(template);

//Expressões
const up = texto => texto.toUpperCase();//Função simples (exemplo)

console.log(`Ei... ${up("cuidado")} ${template}`);
console.log(`Ei... ${up("cuidado")} ${concatenação}`);

