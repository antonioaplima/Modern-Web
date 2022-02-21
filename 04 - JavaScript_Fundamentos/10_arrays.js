const valores = [1, 2, 3, 4];
console.log(valores[0], valores[3]);

//Não existe elemento na posição 4
console.log(valores[4]);

//Agora sim
valores[4] = 5;
console.log(valores);

//Tamanho do array
console.log(valores.length);

//Adicionar elementos
valores.push({id: 3}, false, true, "teste");
console.log(valores);

//Retirar último elemento e mostra qual foi
console.log(valores.pop());

//Deleta um elemento da posição x
delete valores[0];
console.log(valores);

//É um objeto
console.log(typeof valores);



