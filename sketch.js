função setup () {

  createCanvas(400, 400);
}

function draw() {
  background(220);
}let nuvens = [];

function setup() {
  createCanvas(800, 500);

  for (let i = 0; i < 5; i++) {
    nuvens.push({
      x: random(width),
      y: random(40, 150),
      velocidade: random(0.3, 1)
    });
  }
}

function draw() {
  // Céu
  background(135, 206, 235);

  // Sol
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 80);

  // Nuvens
  for (let n of nuvens) {
    desenharNuvem(n.x, n.y);
    n.x += n.velocidade;

    if (n.x > width + 60) {
      n.x = -60;
    }
  }

  // Montanhas
  fill(80, 150, 80);
  triangle(0, 300, 180, 120, 350, 300);
  triangle(200, 300, 420, 100, 650, 300);
  triangle(450, 300, 700, 130, 900, 300);

  // Solo
  fill(90, 180, 90);
  rect(0, 300, width, 200);

  // Rio
  fill(50, 150, 255);
  beginShape();
  vertex(0, 380);
  bezierVertex(200, 330, 400, 430, 800, 350);
  vertex(800, 500);
  vertex(0, 500);
  endShape(CLOSE);

  // Árvores
  for (let x = 80; x < width; x += 120) {
    desenharArvore(x, 280);
  }

  // Painel solar
  desenharPainelSolar(600, 270);

  // Texto
  fill(0);
  textAlign(CENTER);
  textSize(28);
  text("Sustentabilidade no Paraná", width / 2, 40);

  textSize(16);
  text(
    "Energia limpa • Preservação das florestas • Rios protegidos",
    width / 2,
    70
  );

  // Mensagem dinâmica
  fill(20, 100, 20);
  textSize(20);
  text(
    "Cuidar da natureza é garantir o futuro!",
    width / 2,
    470
  );
}

function desenharArvore(x, y) {
  // Tronco
  fill(120, 70, 20);
  rect(x - 10, y, 20, 50);

  // Copa
  fill(34, 139, 34);
  ellipse(x, y, 60, 60);
  ellipse(x - 20, y + 10, 45, 45);
  ellipse(x + 20, y + 10, 45, 45);
}

function desenharPainelSolar(x, y) {
  fill(30);
  rect(x, y, 100, 60);

  fill(0, 120, 255);
  rect(x + 5, y + 5, 90, 50);

  stroke(255);
  line(x + 35, y + 5, x + 35, y + 55);
  line(x + 65, y + 5, x + 65, y + 55);
  line(x + 5, y + 30, x + 95, y + 30);

  noStroke();
  fill(80);
  rect(x + 40, y + 60, 5, 25);
  rect(x + 55, y + 60, 5, 25);
}

function desenharNuvem(x, y) {
  fill(255);
  ellipse(x, y, 50, 35);
  ellipse(x + 25, y - 10, 45, 35);
  ellipse(x + 50, y, 50, 35);
}
