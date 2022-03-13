function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop(0, 1, 0.3);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPontos();
  marcaPonto();
}
