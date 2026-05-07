let sound, fft;

function preload(){
  sound = loadSound('song.mp3');
}

function setup() {
  createCanvas(800, 300);
  sound.loop();
  fft = new p5.FFT();
  fft.setInput(sound);
}

function draw() {
  background(50);
  let spectrum = fft.analyze();
  let w = width / spectrum.length;
  w *= 1.4;
  
  for (let i = 0; i < spectrum.length; i++) {
    let x = i * w;
    let h = map(spectrum[i], 0, 255, 20, height);
    fill(i, 255 - i, 200)
    
    stroke(5, 204, 180);
    rect(x, height - h, w, h);
  }
}