let angle = 0.2; // controls rotation speed

function setup() {
  createCanvas(400, 400);
}

function draw() {

  fill(255); // stars
  noStroke();
  circle(random(width), random(height), 1); // random dot / stars


  push(); // save current drawing settings

  translate(200, 200);
  rotate(angle); // rotation

  strokeWeight(1);
  stroke(0);

  // head
  fill(0, 204, 0);
  ellipse(0, 0, 220, 280);

  // eyes
  fill(0);
  circle(-40, -30, 50);
  circle(40, -30, 50);
  fill(245);
  circle(-45, -40, 20);
  circle(35, -40, 20);

  // mouth
  noFill();
  strokeWeight(5);
  arc(0, 90, 40, 10, 0, PI);

  pop(); // restore original drawing settings

  // slowly increase angle for animation
  angle += 0.05;
}