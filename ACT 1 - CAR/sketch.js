function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
  
  // ground
  fill(120);
  rect(0, 300, 600, 100);

  // car body
  fill(0, 102, 255);
  rect(150, 220, 300, 70);

  // roof
  rect(210, 160, 180, 60);
  
  //window
  fill(180, 220, 255);
  rect(310, 170, 70, 40);

  // wheels
  fill(0);
  ellipse(210, 300, 60, 60);
  ellipse(390, 300, 60, 60);
  fill(200);
  ellipse(210, 300, 30, 30);
  ellipse(390, 300, 30, 30);
}