let yCarros =[40,96,150,210,270,318];
let xCarros= [600,600,600,600,600,600];
let velocidadeDosCarros=[2,2.5,3.2,5,3.3,2.3]
let comprimentoCarro=50;
let alturaCarro=40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i ++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
}
}
       
function movimentaCarro(){
  for ( let i=0;i<imagemCarros.length;i++){
  xCarros[i] -= velocidadeDosCarros[i]; 
  }
  

}
function voltaAPosiçaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i ++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarros){
    return xCarros < - 50;
}
