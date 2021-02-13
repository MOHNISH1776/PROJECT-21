var wall, thickness;  // BY MOHNISH
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

thickness=random(22, 83);
speed=random(100, 290);
weight=random(50, 90);

 bullet=createSprite(50, 200, 50, 10);
bullet.velocityX = speed;
bullet.shapeColor="black";

wall=createSprite(1000, 200, thickness, height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(250);  

  

    if(hasCollided(bullet, wall)){

      bullet.velocityX=0.;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall.shapeColor=color(225, 0, 0);
      }
  
      if(damage<10){
        wall.shapeColor=color(0, 255, 0);
      }
    }
  drawSprites();
}

function hasCollided(bullet, wall){

bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true;
}

return false;
}
