//Evite usar break e continue
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Break");
for(let x in nums){
    if(x == 5){
        break;//sai do for
    }
    console.log(x, "->", nums[x]);
}

console.log("Continue");
for(let x in nums){
    if(x == 5){
        continue;//pula a atual repetição
    }
    console.log(x, "->", nums[x]);
}

//OBS: não use esse tipo de coisa
console.log("Rótulo");
externo: for(let a in nums){//atribuindo um rótulo ao for
    for(let b in nums){
        if(a==2 && b==3){
            break externo;//devido ao rotulo o break será aplicado ao for "externo"
        }
        console.log(nums[a], nums[b]);
    }
}