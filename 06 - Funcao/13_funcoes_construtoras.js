function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0;

    //console.log("Isso é o this:", this, "Fim do this");

    //Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //Outro metodo público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }

    //Outro metodo público
    this.getVelocidadeMaxima = function(){
        return velocidadeMaxima;
    }
}

const Uno = new Carro;//Não setei valores, então assumem os padrões
Uno.acelerar();//incrementa a velocidade atual do Uno
console.log(Uno.getVelocidadeAtual());

const Ferrari = new Carro(300, 30);
while(Ferrari.getVelocidadeAtual() < Ferrari.getVelocidadeMaxima()){
    Ferrari.acelerar();
    console.log("Ferrari:", Ferrari.getVelocidadeAtual(), "Km/h");
}

console.log(Ferrari.velocidadeMaxima);
//OBS: Pq eu não consigo acessar Ferrari.velocidadeMaxima ???

