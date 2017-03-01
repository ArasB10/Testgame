var back;

function setup() {
  createCanvas(800,400);
  back = loadAnimation("assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", "assets/6.png", "assets/7.png", "assets/8.png", "assets/9.png");
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0);
  animation(back, 300, 100);  
  //drawSprites();
}
