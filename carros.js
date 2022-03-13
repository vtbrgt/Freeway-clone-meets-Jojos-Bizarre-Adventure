var xCarros = [600, 600, 600, 600, 600, 600];
var yCarros = [40, 96, 150, 210, 270, 318];
var velocidadeCarros = [2, 3, 3.2, 5, 3.3, 2.3];
var comprimentoCarro = 50;
var alturaCarro = 40;

function mostraCarro() {
  for (var i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (var i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (var i = 0; i < xCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < - 50;
}