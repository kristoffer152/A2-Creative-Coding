function setup() {
  createCanvas(600, 500);
  background(96,96,96);
  for (let i = 0; i < 99; i++) {
    face(random(width), random(height));
  }
}

function face(x, y) {
  fill(random(0,255), random(0,255), random(0,255));
  
  ellipse(x,y,50,50); //head
  fill(255); //eye color
  ellipse(x-10 ,y,10,10);
  ellipse(x+10,y,10,10);
}