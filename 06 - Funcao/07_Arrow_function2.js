function Pessoa(){
    this.idade = 0;

    //Independente do lugar onde as funções são chamadas, 
    //quando vc usa arrow function o this se mantém
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa;