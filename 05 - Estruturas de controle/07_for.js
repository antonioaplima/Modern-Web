let contador = 0;
console.log("While:");
while(contador<10){
    console.log(contador);
    contador++;
}

console.log("For:");
for(let i=0; i<10; i++){
    console.log(i);
}

console.log("Array:");
const notas = [6, 7, 4, 3, 5, 6, 7, 8, 9, ];
for(let i = 0; i<notas.length; i++){
    console.log(notas[i]);
}