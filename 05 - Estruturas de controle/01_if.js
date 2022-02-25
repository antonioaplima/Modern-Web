//IF:
function soBoaNoticia(nota){
    if(nota>=7){
        console.log("Aprovado com", nota);
    }
}
soBoaNoticia(7.1);

//IF - ELSE:
function teste1(num){
    //if pode ignorar as chaves se tiver apenas uma sentença
    if(num >= 7)
        console.log(num);
    
    console.log("Sempre aprovado");
}
teste1(7.1);
