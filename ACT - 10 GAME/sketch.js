let gameState = "title";
// Block player
let player;
let playerSize = 40;
let speed = 5;

// Debris
let fall = [];
let fallSize = 40;

// Score / win condition
let score = 0;
let winScore = 10;

// Health bar
let health = 100;

// Particle effects for magic explosions
let particles = [];

// Star
let star;


// SETUP
function setup() {
  createCanvas(600, 400);
  resetGame();
}


// RESET GAME
function resetGame() {
  // Player starts bottom center
  player = { x: width / 2, y: height - 60 };

  fall = [];
  particles = [];

  score = 0;
  health = 100;
  
  // Create collectible star for winning
  star = {
    x: random(50, width - 50),
    y: random(50, height - 150),
    size: 25
  };

  // Create enemy debris
  for (let i = 0; i < 20; i++) {
    fall.push(createFall());
  }
}


// CREATE FALLING DEBRIS
function createFall() {
  return {
    x: random(width),
    y: random(-200, 0),
    speed: random(2, 4)
  };
}

// MAIN DRAW LOOP
function draw() {
  background(20, 0, 40);


  // TITLE SCREEN
  if (gameState === "title") {
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("🟦 Block Blast 💥", width / 2, height / 2 - 40);

    textSize(16);
    text("Click to Start", width / 2, height / 2 + 20);
    return;
  }


  // GAMEPLAY
  if (gameState === "play") {
    updatePlayer();
    updateFall();
    updateParticles();
    checkWinLose();
    drawUI();

    // STAR
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 255, 0);
    
    fill(255, 255, 0);
    ellipse(star.x, star.y, star.size);
    
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = color(0, 0, 0, 0);

    // Collision with player
    if (
      player.x < star.x + star.size &&
      player.x + playerSize > star.x &&
      player.y < star.y + star.size &&
      player.y + playerSize > star.y
    ) {
      score += 1;

      star.x = random(50, width - 50);
      star.y = random(50, height - 150);
    }
  }

  // WIN SCREEN
  if (gameState === "win") {
    endScreen("YOU WIN! 🏆");
  }

  // LOSE SCREEN
  if (gameState === "lose") {
    endScreen("YOU LOSE 💀");
  }
}


// PLAYER
function updatePlayer() {
  player.x = mouseX - playerSize / 2;
  player.y = mouseY - playerSize / 2;

  fill(0, 200, 255);
  rect(player.x, player.y, playerSize, playerSize);
}


// FALL ENEMIES
function updateFall() {
  for (let i = 0; i < fall.length; i++) {
    let s = fall[i];
    s.y += s.speed;

    fill(150,0,0);
    ellipse(s.x, s.y, fallSize);

    // Reset if off screen
    if (s.y > height) {
      fall[i] = createFall();
    }

    // COLLISION
    if (
      player.x < s.x + fallSize &&
      player.x + playerSize > s.x &&
      player.y < s.y + fallSize &&
      player.y + playerSize > s.y
    ) {
      createMagicExplosion(s.x, s.y);

      health -= 15;

      fall[i] = createFall();
    }
  }
}


// MAGIC EXPLOSION
function createMagicExplosion(x, y) {
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: x,
      y: y,
      vx: random(-2, 2),
      vy: random(-2, 2),
      life: 50
    });
  }
}


// PARTICLES
function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    fill(255, 0, 0, p.life * 5);
    ellipse(p.x, p.y, 5);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}


// WIN / LOSE CONDITIONS
function checkWinLose() {
  if (score >= winScore) {
    gameState = "win";
  }

  if (health <= 0) {
    gameState = "lose";
  }

  health = constrain(health, 0, 100);
}


// UI
function drawUI() {
  fill(255);
  textSize(14);
  textAlign(LEFT);
  text("Stars Collected: " + score, 10, 20);
  text("Health: " + health, 10, 40);

  fill(255, 0, 0);
  rect(10, 50, health * 2, 10);

  fill(255);
  text("Collect the stars to win the game.", 10, 390);
}


// END SCREEN
function endScreen(msg) {
  fill(255);
  textAlign(CENTER);
  textSize(28);
  text(msg, width / 2, height / 2);

  textSize(16);
  text("Click to Restart", width / 2, height / 2 + 40);
}


// CONTROLS
function mousePressed() {
  if (gameState === "title") {
    gameState = "play";
  }

  if (gameState === "win" || gameState === "lose") {
    gameState = "title";
    resetGame();
  }
}