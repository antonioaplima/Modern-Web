const notas = [2, 3, 2, 4, 5, 6, 7, 3, 4, ];
for(let i in notas){
    console.log(i, "->", notas[i]);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva", 
    idade: 56, 
    peso: 70
}

for(let atributo in pessoa){
    console.log(atributo, pessoa[atributo]);
}

