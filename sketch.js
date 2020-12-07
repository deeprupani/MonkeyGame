
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;

function preload(){
  
  
       monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  // ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  BananaGroup=new Group();
  ObstacleGroup=new Group();
}


function draw() {
  background(220);
  
  if(keyDown("space")&& monkey.y >= 250) {
   monkey .velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);   
  
  monkey.collide(ground); 
  
  Banana();
  Rocks();
  
  drawSprites();
}

function Banana(){
  if (frameCount % 80 === 0) {
     banana = createSprite(600,100,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale = 0.2;
    
    BananaGroup.add(banana)
     //assign lifetime to the variable
    //cloud.lifetime = 134;
  
}
}

function Rocks(){
  
  if (frameCount % 300 === 0) {
     rock = createSprite(600,320,10,10);
   // rock.y = Math.round(random(50,600));
    rock.addImage(obstacleImage);
    rock.velocityX=-4;
    rock.scale = 0.2;
    rock.lifetime=130;
    
   ObstacleGroup.add(rock) 
}
}
