let table;
let word = "UAE POPULATION BY NATIONALITY 2025";
function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}
function setup() {
  createCanvas(850, 350);
  background(40);
  
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(word, width / 2, 30);

  let barWidth = 65;
  
  for(let i = 0; i < table.getRowCount(); i++) {
    let nationality = table.getString(i, 'Nationality');
    let percentage = table.getNum(i, 'Percentage');
    let population = table.getNum(i, 'Population');
    
    let x = 30 + i * (barWidth + 16);
    let h = map(percentage, 0, 50, 20, height);
    
    fill(0, 119, 255);
    rect(x, height-h, barWidth, h);
    
    fill(255);
    textAlign(CENTER);
    
    textSize(13);
    text(nationality, x + barWidth / 2, height - 280);
    
    textSize(10);
    text(population + "M", x + barWidth/ 2, height - 22);
    textSize(12);
    text(percentage + "%", x + barWidth / 2, height - 5); 
  }
}