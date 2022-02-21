const nome_da_escola = "Cod3r";

//Achar letra na posição x
console.log(nome_da_escola.charAt(4));

//Quando é passado o número 5, o programa retorna vazio 
//pois não exite caractere na 5ª posição
console.log(nome_da_escola.charAt(5));

//Código relacionado a determinado caractere
console.log(nome_da_escola.charCodeAt(3));

//Achar caractere e retornar posição
console.log(nome_da_escola.indexOf(3));

//Cortar string
console.log(nome_da_escola.substring(1));
console.log(nome_da_escola.substring(0, 2));//Começa do 0 e pega 2

//Concatenar
console.log("Escola".concat(nome_da_escola).concat("!"));
console.log("Escola" + nome_da_escola + "!");
console.log("Escola", nome_da_escola, "!");

//Trocar letra - Replace
console.log(nome_da_escola.replace(3, "e"));

//Separar texto em array
console.log("Antonio,Augusto,Pereira,Lima".split(","));






