function rand([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([20, 30]));
console.log(rand([30, 20]));
console.log(rand([]));
