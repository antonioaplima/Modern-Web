//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação
const x = "Global";

function fora(){
    const x = "Local";//Se essa linha for excluida será impresso "Global" pois a função procura "x" em um contexto mais externo
        function dentro(){
        return x;
    }
    return dentro;
}

const minhaFunção = fora();
console.log(minhaFunção());