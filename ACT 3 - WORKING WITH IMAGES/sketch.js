let img;

function preload() {
  img = loadImage("titanic.jpg");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(10, 30, 70);

  translate(width / 2, height / 2);

  // HEART SHAPE CLIP
  drawingContext.save();
  drawingContext.beginPath();

  let size = 450;

  for (let a = 0; a <= TWO_PI; a += 0.01) {
    let x = 16 * pow(sin(a), 3);
    let y = -(13 * cos(a) - 4 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));

    x = x * size / 20;
    y = y * size / 20;

    if (a === 0) {
      drawingContext.moveTo(x, y);
    } else {
      drawingContext.lineTo(x, y);
    }
  }

  drawingContext.closePath();
  drawingContext.clip();

  // IMAGE
  image(img, 0, 0, width, height);

  // WATERCOLOUR EFFECT
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(255, 30);
    ellipse(
      random(-200, 200),
      random(-200, 200),
      random(5, 120)
    );
  }

  drawingContext.restore();

  // TEXT
  fill(255);
  textSize(42);
  textStyle(BOLD);
  text("Near, far,", 0, 90);
  text("wherever you are", 0, 130);
}