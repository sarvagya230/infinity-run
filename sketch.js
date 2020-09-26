var playre_img,player,player1,player2,player3,player4,base,obstical,Intro,database,player_count,player5,player6,player7,player7,player8,playre2_img,runner;
var distenceValue2=distanceValue=0;
var Distancea,playerCount;
var index=0
var g=0;
function setup() {
  Intro=new intro()
  database=firebase.database();
  Distancea =new distance 
  createCanvas(displayWidth, displayHeight);
  player=createSprite(200,200)
  player.addAnimation("player",playre_img)
  player.visible=false
 
  
 
  

 
  
  
 // playre_img.resize(200,200)
 
}
function preload()

{
  player1=loadImage("runing1.jpg")
  player2=loadImage("runing2.jpg")
  player3=loadImage("runing3.jpg")
  player4=loadImage("runing4.jpg")
  player7=loadImage("3.jpg")
  player6=loadImage("2.jpg")
  player5=loadImage("1.jpg")
  player8=loadImage("4.jpg")
  playre2_img=loadAnimation(player5,player6,player7,player8)
  playre_img=loadAnimation(player1,player2,player3,player4)
  runner = createSprite(100,200,20,10)
  runner.addAnimation("label",playre2_img)
  runner.visible=false
  
  
  


}

function draw() {
  Intro.display()
  Intro.getPlayer()
  
  console.log(playerCount)

  
  if(g===1)
  {
    
   
  background(255);
  player.visible=true
  runner.visible=true

 

 
 
  
  base=createSprite(300,600,5000,10)
  base.shapeColor="blue"
  base.velocityX=-5
  
  runner.collide(base)
  
  
  
  player.collide(base)
  
  player1.resize(90,90)
  player2.resize(90,90)
  player3.resize(90,90)
  player4.resize(90,90)
  player5.resize(90,90)
  player6.resize(90,90)
  player7.resize(90,90)
  player8.resize(90,90)
     if (frameCount%1000===0)
    {
      background("red")
      text("you lost",displayWidth/2,displayHeight/2)
    }
  
  if(player.x>500)
  {
    base.x=100
  }
  if (frameCount%100===0)
  {
    obstical=createSprite(700,580,40,40)
    obstical.velocityX=-5
   // obstical.debug=true
      if(runner.isTouching(obstical))
  {
   
  }
   
    obstical.lifetime=200
   
    
    

  }
  if(obstical!=undefined)
  {
  if(player.isTouching(obstical))
  {
    distanceValue=Math.round(distanceValue-2)
    runner.velocityY=-20
   
    
  }
 
 
}



  
  if (frameCount%2===0)
  {
    distanceValue=distanceValue+1
    distenceValue2=distenceValue2+1

    Distancea.getDistance()
    

  }
  runner.velocityY=runner.velocityY+1

 

  camera.position.x=player.x
  if(keyDown("space")&&(player.y>500))
  {
    player.velocityY=-10
  }
  player.velocityY=player.velocityY+0.5
  text("player distance: "+distanceValue,100,100)
  text("rival distance: "+distenceValue2,100,150)
}
drawSprites()

}
