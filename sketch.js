var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var obstaclesGroup
var score = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
monkey = createSprite(80,315,20,20)
monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,1500,12)
ground.velocityX = -5;
 
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  
console.log(ground.x)
  
}


function draw() {
background(220);
  
  score = score + Math.round(getFrameRate()/60);
  
  textSize(28)
  text("Survival Time: "+ score, 120,50);
  
  
  spawnBananas();
  spawnObstacles();
  

  
  if (obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0; monkey.velocityY = 0; obstaclesGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1);  
    foodGroup.setVelocityXEach(0); foodGroup.setLifetimeEach(-1); 
    score = 0;
  }
  
  if (keyDown("space") ){
    monkey.velocityY = -12
  }
  monkey.velocityY= monkey.velocityY+0.8
monkey.collide(ground)

   ground.x = ground.width/2
  drawSprites();
}

function reset(){
  
  obstaclesGroup.destroyEach();
score = 0;
  
}

function spawnBananas(){
  if (frameCount % 95 === 0){
    
    banana = createSprite(600,150,20,20)
    banana.velocityX=-4
    banana.lifetime = 120;
     banana.addImage("banana",bananaImage)
    banana.scale = 0.1;
  foodGroup.add(banana);
  }
}
function spawnObstacles(){
  if (frameCount % 120 === 0){
    
    obstacle = createSprite(600,326,20,20);
    obstacle.velocityX=-4;
    obstacle.lifetime = 160;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.1;
    obstaclesGroup.add(obstacle);
  }
}
