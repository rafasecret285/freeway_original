let yCarros = [40,96,152,210,270,318];
let xCarros = [600,600,600,600,600,600];
let velocidadeCarros = [2,2.5,3.2,5,3.3,2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i =0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i],xCarros[i],yCarros[i],50,40);
  }
}
  
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length;i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0 ; i < imagemCarros.length;i = i + 1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600
    }
  }   
}

function passouTodaTela(xCarro){
  return xCarro < -50
}
