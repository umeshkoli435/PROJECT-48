//creating variables
var snake,wall,food;
var score = 0;
var foodSound,gameOver,move,music;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var over;

//loading images and sound
function preload() {
    foodSound = loadSound("food.mp3");
    gameOver = loadSound("gameover.mp3");
    move = loadSound("move.mp3");
    music = loadSound("music.mp3");

    overImg = loadImage("over.png");
}
//adding properties
function setup() {
    createCanvas(1000,600);

   
    over= createSprite(450,300)
    over.addImage(overImg)
    over.visible = false;
    snake = createSprite(500,500,30,30);
    edge = createEdgeSprites();
    food = createSprite(300,500,20,20);
    score = 0;
}

function draw() {
    background(0);
    text("Score: "+ score,550,90)
    //giving snake and food color
    snake.shapeColor="red"
    food.shapeColor="orange"
  
    //increasing snake velocity
   if(gameState===PLAY){
       if(score >10){
        if (keyCode === RIGHT_ARROW){
            snake.x =snake.x+12
             
         }
         if (keyCode === LEFT_ARROW){
             snake.x = snake.x-12
           
         }
         if (keyCode === DOWN_ARROW){
             snake.y = snake.y+12
             
         }if (keyCode === UP_ARROW){
             snake.y =snake.y-12
         
         }
        // if(keyCode === RIGHT_ARROW)[
            // move.play()
        // ]
       }
      //giving food and snake commands 
    spawnFood();
    keyPressed();
    
  
    if(snake.isTouching(edge)){
        gameState=END
    }
   }
   else if(gameState === END){
      s="PRESS 'R' TO RESTART" 
    
      over.visible = true;
      food.destroy()
      score = 0;
      snake.x=500
      snake.y=500 
      textSize(25);
      stroke("green")
      text(s,100,100,90);
      
      reset()
     
   }
    drawSprites();
}

// spawning food randomly
function spawnFood() {
    if (snake.isTouching(food)) {
       
        food.y = random(10,500);
        food.x = random(10,590)
    score = score+1}
}
// snake moves when the keys are pressed
function keyPressed() {
    if (keyCode === RIGHT_ARROW){
       snake.x =snake.x+10
     
    }
    if (keyCode === LEFT_ARROW){
        snake.x = snake.x-10
      
    }
    if (keyCode === DOWN_ARROW){
        snake.y = snake.y+10
        
    }if (keyCode === UP_ARROW){
        snake.y =snake.y-10
    
    }
}

//game will restart
function reset(){ 
if (keyDown("R")){
    gameState = PLAY;
    food.x=300
    food.y=200
    over.visible = false;
}

}
