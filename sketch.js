var fix;
var move;
var america;
var KRISH;


function setup() {
  createCanvas(800,400);
 
  KRISH = createSprite(100,100,50,100)
  KRISH.shapeColor = "green"
  america = createSprite(150,150,50,100)
  america.shapeColor = "green"
  fix = createSprite(200,200,50,100)
  fix.shapeColor = "green"
  move = createSprite(200,50,100,50)
  move.shapeColor = "green"
  fix.debug = true;
  move.debug = true;
}

function draw() {
  background(255,255,255); 
  
  move.x = World.mouseX
  move.y = World.mouseY

  if(isTouching(KRISH,move)) {
    KRISH.shapeColor = "blue"
    move.shapeColor = "blue"
  }

  else{
    KRISH.shapeColor = "green"
    move.shapeColor = "green"
  }

  drawSprites();
}
