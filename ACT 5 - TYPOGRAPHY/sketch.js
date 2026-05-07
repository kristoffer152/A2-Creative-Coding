var word = "KRISTOFFER";
var font1;
function preload()
{
  font1 = loadFont("font/BlackOpsOne-Regular.ttf");

}

function setup() {
  createCanvas(600, 400);
  background(0);
  textFont(font1, 80);
  textAlign(CENTER);
  
  // red shadow
  fill(255,0,0);
  text(word,305,205);
  // main text
  fill(255);
  text(word, 300, 200);
}