var stick1,stick2,stick3,stick4,stick5,stick6,triangle1,triangleImg;

function preload(){
  triangleImg=loadImage("trianglez.png");
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  stick1=createSprite(250,290,10,190);
  stick2=createSprite(273,300,35,110);
stick3=createSprite(318,300,50,130);
stick4=createSprite(370,300,50,130);
stick5=createSprite(415,300,35,110);
stick6=createSprite(439,290,10,190);
triangle1=createSprite(400,260,20,20);
triangle1.addImage(triangleImg);
}

function draw() {
  background("black");  
  stick1.shapeColor="white";
  stick2.shapeColor="white";
  stick3.shapeColor="white";
  stick4.shapeColor="white";
  stick5.shapeColor="white";
  stick6.shapeColor="white";
  console.log(triangleImg);
  triangle1.scale=0.3;
  drawSprites();
}