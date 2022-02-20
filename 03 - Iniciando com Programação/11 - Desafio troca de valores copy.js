let a = 4;
let b = 5;
console.log("a =", a);
console.log("b =", b);

let c = a;
a = b;
b = c;
console.log("a =", a);
console.log("b =", b);

//Como trocar os valores das variáveis de uma forma mais fácil

let d = 10;
let e = 15;

[d, e] = [e, d];
console.log("d =", d);
console.log("e =", e);