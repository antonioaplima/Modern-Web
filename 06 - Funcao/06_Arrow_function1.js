//Arrow function

let dobro = function(a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a;//return está implícito quando a função tem apenas uma linha

//Outro exemplo

let ola = function(){
    return "Olá";
}

ola = () => "Olá";
console.log(ola());