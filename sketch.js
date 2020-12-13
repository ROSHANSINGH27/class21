var movingRect, fixedRect



function setup() {
  createCanvas(1200,400);
  movingRect=createSprite(800, 200, 100, 50);
  movingRect.shapeColor="green"
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="green"
  fixedRect.velocityX=2
  movingRect.velocityX=-2
}

function draw() {
  background(0);  

if (isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
}else{
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}
bounceOff(fixedRect,movingRect)
  drawSprites();
}