var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation(
   "hotairballoon1.png",
   "hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(400,200,50,50);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  var balloonheight=database.ref('balloon/height')
  balloonheight.on("value",readheight,showerror)
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateheight(-10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
updateheight (10,0)
  }
  if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateheight(0,-10)
    balloon.scale=balloon.scale-.25
  }
   if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    updateheight(0,10)
    balloon.scale=balloon.scale+.25
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readheight(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y 
}
function updateheight(x,y){
 database.ref("balloon/height").set({
   "x":height.x+x,
   "y":height.y+y 
 })    
}
function showerror(){
  console.log ("error")
}

