const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b));
}

//Quando vc não passar uma função como terceiro parâmetro ela assumirá o default que é "soma"
imprimirResultado(1, 1);//Retorna a soma dos 2 numeros

//Também retorna a soma
imprimirResultado(1, 1, soma);

//mas podemos trocar a função(terceiro parâmetro)
imprimirResultado(1, 1, function(x, y){
    return x - y;
})

imprimirResultado(1, 1, (x, y) => x * y)//Arrow function anonima

//função dentro de objeto
const pessoa = {
    falar: function(){
        console.log("Opa!");
    }
}
pessoa.falar();
