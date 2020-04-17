var ob1, ob2, ob3, ob4;
function setup() {
createCanvas(800,400);
ob1 = createSprite(100, 100, 50, 50);
ob2 = createSprite(300, 300, 60, 50);
ob3 = createSprite(200, 200, 60, 70);
ob4 = createSprite(400, 400, 50, 80);
ob1.shapeColor = "red";
ob2.shapeColor = "green";
ob3.shapeColor = "yellow";
ob4.shapeColor = "white";
ob1.velocityY = 6;
ob2.velocityY = -5;
ob1.velocityX = 6;
ob2.velocityX = -5;
ob3.velocityX = 5;
ob4.velocityX = -4;
ob3.velocityY = 5;
ob4.velocityY = -4; 
}

function draw() {
  background(0,0,0);  

  bounceoff(ob1, ob2);
  bounceoff(ob3, ob4);

  drawSprites();
}
