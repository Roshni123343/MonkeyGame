
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score, survivalTime;
var position_banana;

function preload(){
monkey_running =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(100,400,70,70);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.25;
  
  ground = createSprite(177,488,1000,20);
  ground.x=ground.width/2;
  
  score=0;
  survivalTime=0;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}


function draw() {
  background("lightblue");

  ground.velocityX=-4;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y>=100){
    monkey.velocityY=-5;
  }
  monkey.velocityY= monkey.velocityY+0.8;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
  obstacles();
  food();
  drawSprites();
}

  function food(){
    if(World.frameCount % 80===0){
     banana = createSprite(500,200,50,50);
     banana.addImage("food",bananaImage);
     banana.scale=0.2;
     position_banana=Math.round(random(120,200));
     console.log(position_banana);
     banana.y= position_banana;
     banana.velocityX=-4;
     banana.lifetime= 125;
      
    bananaGroup.add(banana);
      }
    
  }

  function obstacles(){
    if(World.frameCount % 300===0){
       obstacle = createSprite(500,420,60,60);
       obstacle.addImage("stone",obstacleImage);
       obstacle.scale=0.3;
       obstacle.velocityX=-5;
       obstacle.lifetime= 100;
       
      obstacleGroup.add(obstacle);
       }
    
    }




