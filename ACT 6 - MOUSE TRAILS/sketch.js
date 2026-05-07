function setup() {
  createCanvas(900,600);
  background(220);
}

function draw() {
  fill(random(255), random(255), random(255));
  circle(mouseX,mouseY,50);
}

function mousePressed() {
  background(random(255), random(255), random(255));
}