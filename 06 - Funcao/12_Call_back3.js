//Sem call back
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4];
let notasBaixas = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);


//Com call back
notasBaixas = notas.filter(function(nota){
    return nota < 7;
});

console.log(notasBaixas);

//com call back + arrow
notasBaixas = notas.filter(nota => nota < 7);