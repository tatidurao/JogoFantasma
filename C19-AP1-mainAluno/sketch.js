var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if (gameState === "play") {
      if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;
      }
      
      if(keyDown("right_arrow")){
        ghost.x = ghost.x + 3;
      }
      
      if(keyDown("space")){
        ghost.velocityY = -10;
      }
      
      ghost.velocityY = ghost.velocityY + 0.8
      gerarPostas();
      drawSprites();
}

if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Fim de Jogo", 230,250)
}
}

function gerarPostas() {

}
