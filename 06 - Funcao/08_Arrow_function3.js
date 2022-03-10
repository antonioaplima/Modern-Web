let comparaComThis = function(param){
    console.log(this === param);
}

comparaComThis(global);//no browser o global chama-se window

const obj = {}
comparaComThis  = comparaComThis.bind(obj);

comparaComThis(global);//Mudou, agora o this é o obj

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);//False pq arrow function aponta o this para dentro da função
comparaComThisArrow(module.exports);

//Vamos usar o bind em função arrow
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);//Ou seja não da pra usar a referencia do this dentro de uma arrow function

