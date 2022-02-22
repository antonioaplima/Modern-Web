var num = 1;

{
    var num = 2;
    //como tudo que não está dentro de função é global, a linha acima sobreescreve a variável "num"
    console.log("dentro =", num);
}

console.log("fora =", num);