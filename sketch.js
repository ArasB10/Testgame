var ninja;
var mimage;

function setup() {
  createCanvas(800,400);
  mimage = loadImage("assets/Dead_000.png");
  ninja = loadAnimation("assets/Dead_000.png","assets/Dead_001.png","assets/Dead_002.png","assets/Dead_003.png","assets/Dead_004.png"
                       ,"assets/Dead_005.png","assets/Dead_006.png","assets/Dead_007.png","assets/Dead_008.png","assets/Dead_009.png");
 // createSprite(400, 200, 50, 50);
}

function draw() {
  //background(200);
  text("all good",50,50);
  image(mimage, 100,100,50,50);
  //animation(ninja, 400, 400);  
  //drawSprites();
}
