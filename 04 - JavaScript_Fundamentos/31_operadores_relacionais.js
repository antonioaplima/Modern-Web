// O resultado é sempre verdadeiro ou falto

console.log("01", "1" == 1);//os valores são igual
console.log("02", "1" === 1);//os valores são igual mas os tipos são diferentes
console.log("03", "3" != 3);//falso, são igual
console.log("04", "3" !== 3);//true pq os tipos são diferentes

console.log("06", 3 > 2);
console.log("07", 3 < 2);
console.log("08", 5 >= 2);
console.log("09", 5 <= 2);

const d1 = new Date(0);
const d2 = new Date(0);
//Essas comparações vão resultar false pq estão comparando 
//endereço de memória
console.log("10", d1 == d2);
console.log("11", d1 === d2);

//Agora é verdadeiro pq está comparando o conteúdo
console.log("12", d1.getTime === d2.getTime);

//OBS sempre use os 3 iguais 
