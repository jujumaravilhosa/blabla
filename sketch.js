Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential

Aula 09 - Jogo Pong
by EstudanteAlura


sketch.js

//variáveis da bolinha

let xBolinha = 100;

let yBolinha = 200;

let diametro = 20;

let raio = diametro / 2;

​

//variáveis do oponente

let xRaqueteOponente = 585;

let yRaqueteOponente = 150;

​

//velocidade da bolinha

let velocidadeXBolinha = 6;

let velocidadeYBolinha = 6;

​

//variáveis da raqubolinhaete

let xRaquete = 5;

let yRaquete = 150;

let raqueteComprimento = 10;

let raqueteAltura = 90;

​

//placar do jogo

let meusPontos = 0;

let pontosDoOponente = 0;

​

​

let colidiu = false;

​

function setup() {

  createCanvas(600, 400);

}

​

function draw() {

    background(0);

    bingofofo();

    movimentaBolinha();

    verificaColisaoBorda();

    mostraRaquete(xRaquete, yRaquete);

    movimentaMinhaRaquete();

    verificaColisaoRaquete(xRaquete, yRaquete);

    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

    mostraRaquete(xRaqueteOponente, yRaqueteOponente);

    movimentaRaqueteOponente();

    incluiPlacar() 

    marcaPonto();

}

function bingofofo() {

  circle(xBolinha, yBolinha, diametro);

}

​

function movimentaBolinha() {

  xBolinha += velocidadeXBolinha;

  yBolinha += velocidadeYBolinha;

}

​

function verificaColisaoBorda() {

  if (xBolinha + raio > width || xBolinha - raio < 0) {

    velocidadeXBolinha *= -1;

  }
59
  if (yBolinha + raio > height || yBolinha - raio < 0) {
60
    velocidadeYBolinha *= -1;
61
  }
62
}
63
​
There are no lint messages
Current line
