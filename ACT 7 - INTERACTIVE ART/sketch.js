function setup() {
  createCanvas(900, 600);
  background(240);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    
    // random colors
    fill(random(255), random(255), random(255), 120);
    
    let sizes = random(20, 80);
    
    circle(mouseX, mouseY, sizes);
    
    //text for reset button
    fill(0);
    textSize(16);
    text("Press SPACE to reset", 10, 590);
  }
}

// Press Space to "reset" with a new background color
function keyPressed() {
  if (key === ' ') 
  background(random(200, 255), random(200, 255), random(200, 255));
}