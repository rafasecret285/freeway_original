//ator
let yAtor = 366;
let xAtor = 100;

let colidiu = false; 

let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,35,35);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3
  }
  if(keyIsDown(DOWN_ARROW) && yAtor<366){
    yAtor +=3
  }
}

function colisaoCarro(){
  for(let i =0; i < imagemCarros.length; i += 1){
    colidiu = collideRectRect(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,35,35)
    if (colidiu){
      voltaPosicaoInicial()
      somColisao.play();
      if(pontos > 0){
        pontos -= 1
      } 
    }  
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER)
  fill(255,240,0)
  textSize(25)
  text("Pontuação:",80,27)
  text(pontos,160,27)
}

function marcaPonto(){
  if(yAtor <= 15){
    pontos += 1
    somPontos.play();
    voltaPosicaoInicial()
  }
}