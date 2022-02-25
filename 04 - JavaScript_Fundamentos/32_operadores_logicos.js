function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 !== trabalho2;//Ou exclusivo
    const manterSaudavel = !comprarSorvete;

    /*
    return {
        comprarSorvete: comprarSorvete, 
        comprarTv50: comprarTv50, 
        comprarTv32: comprarTv32, 
        manterSaudavel: manterSaudavel
    };
    */

    //Criar objeto implícito: a observação abaixo é igual a de cima
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
