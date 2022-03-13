// imagens e sonsjogo

var imagemEstrada;
var imagemAtor;
var imagemAtorMovimento;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;

var somDaTrilha;
var somDaColisao;
var somDoPonto;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/giorno.png");
  imagemAtorMovimento = loadImage("imagens/giorno-mov.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  somDaTrilha = loadSound("sons/giorno-theme.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
