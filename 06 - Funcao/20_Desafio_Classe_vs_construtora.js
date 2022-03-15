/*class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}*/

function Pessoa(nome){
    this.nome = nome;

    this.falar = () => {
        console.log(`Meu nome é ${nome}`);
    }

}

const p1 = new Pessoa("João");
console.log(p1.nome);//Com o this podemos convocar o nome e alterá-lo
p1.falar();