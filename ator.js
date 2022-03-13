// ator
var xAtor = 85;
var yAtor = 370;
var colisao = false;

var parado;
var movimento;

var meusPontos = 0;

function mostraAtor() {
  if (parado == true) {
    image(imagemAtor, xAtor, yAtor, 50, 55);
  }
}

function mostraAtorMovimento() {
  if (movimento == true) {
    image(imagemAtorMovimento, xAtor, yAtor, 50, 55);
  }
}


function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    parado = false; 
    movimento = true;
    mostraAtorMovimento();
    yAtor -= 3;
  } else if (keyIsDown(DOWN_ARROW)) {
      parado = false;
      movimento = true;
      mostraAtorMovimento();
      yAtor += 3;
  } else {
      movimento = false;
      parado = true;
  }
}

function verificaColisao() {
  // collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (var i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 50, 50);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 370;
}

function mostraPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,215,0));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < -23) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return (meusPontos > 0)
}