{
    {
        {
            {
                var sera = "Será?";
                console.log(sera);
            }
        }
    }
}

console.log(sera);

//Todas as variáveis são globais exeto quando são criadas dentro de funções

function teste(){
    var local = 1;
    console.log(local);
}

teste();
//console.log(local); Isso não funciona porque a variável "local" só é visível dentro da função
