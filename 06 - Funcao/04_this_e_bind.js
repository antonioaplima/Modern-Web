const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar();//Conflito, o this está em lugares diferentes

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();