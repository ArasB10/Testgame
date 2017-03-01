var ninja;

function setup() {
  createCanvas(800,400);
  ninja = loadAnimation("assets/Dead_000","assets/Dead_009");
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(200);
  animation(ninja, 300, 100);  
  //drawSprites();
}
