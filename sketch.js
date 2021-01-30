var Rectmove, Recnotmove


function setup() {
  createCanvas(800,400);
   Rectnotmove =createSprite(400, 200, 50, 50);
   Rectmove = createSprite(200,200,50,50)
   Rectnotmove.shapeColor = "lightgreen";
   Rectmove.shapeColor = "lightblue";
}

function draw() {
  background(255,255,255);  
  Rectmove.x = mouseX;
  Rectmove.y = mouseY;
  if (Rectmove.x - Rectnotmove.x < Rectmove.width/2 + Rectnotmove.width/2
    && Rectnotmove.x - Rectmove.x < Rectmove.width/2 + Rectnotmove.width/2 &&
    Rectnotmove.y - Rectmove.y < Rectnotmove.height/2 + Rectmove.height/2 &&
    Rectmove.y - Rectnotmove.y < Rectmove.height/2 + Rectnotmove.height/2){
    Rectnotmove.shapeColor = "green"
    Rectmove.shapeColor = "blue"
  }
  else{
    Rectnotmove.shapeColor = "lightgreen";
   Rectmove.shapeColor = "lightblue";

  }

  drawSprites();
}






