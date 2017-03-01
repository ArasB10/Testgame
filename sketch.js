var ninja;
var mimage;
var mumage;


function setup() {
  createCanvas(800,400);
  mimage = loadImage("assets/1.png");
  mumage = loadImage("assets/2.png");
  //ninja = loadAnimation("assets/Dead__000.png","assets/Dead__001.png","assets/Dead__002.png","assets/Dead__003.png","assets/Dead__004.png"
    //                   ,"assets/Dead__005.png","assets/Dead__006.png","assets/Dead__007.png","assets/Dead__008.png","assets/Dead__009.png");
 // createSprite(400, 200, 50, 50);
}

function draw() {
  //text("all good",50,50);
  image(mimage, 100,100,50,50);
  image(mumage, 100,100,50,50);
  //animation(ninja, 400, 400);  
  //drawSprites();
}
