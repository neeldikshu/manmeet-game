const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var back,g1,g2,g3,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,B11,b12,b13,b14,b15,b16,b17,b18;
var tie,ball;
var bg = "day.jpg"
function preload(){
  getBackgroundImg()
}

function setup(){
    createCanvas(800,400)
    engine = Engine.create();
    world = engine.world;
g1 = new Ground(400,380,800,50)
g2 =new Ground (350,250,250,15)
g3 =new Ground (650,250,200,15)
b1 = new Pin (270,240,40,40)
b2 = new Pin (310,240,40,40)
b3 = new Pin (350,240,40,40)
b4 = new Pin (390,240,40,40)
b5 = new Pin (430,240,40,40)
b6 = new Pin (310,200,40,40)
b7 = new Pin (350,195,40,40)
b8 = new Pin (390,190,40,40)
b9 = new Pin (350,150,40,40)
b10 = new Pin (590,130,30,30)
b11 = new Pin (620,130,30,30)
b12 = new Pin (650,130,30,30)
b13 = new Pin (680,130,30,30)
b14 = new Pin (710,130,30,30)
b15 = new Pin (620,100,30,30)
b16 = new Pin (650,100,30,30)
b17 = new Pin (680,100,30,30)
b18 = new Pin (650,70,30,30)

ball = new Ball(150,200,40)

tie=new Tier(ball.body,{x:150,y:150});

}
function draw(){
    if(back){
      background(back);
  }
    Engine.update(engine);
    g1.display();
    g2.display();
    g3.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    ball.display();
    tie.display();
    textSize(20)
    fill (0)
    text("drag the ball and release it",300,30)
}
function mouseDragged()
{
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
    tie.fly();
}

async function getBackgroundImg()
 {
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJSON= await response.json();
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime; 
    
    var hour = datetime.slice(11,13);
    if (hour >=6 && hour <=19){
        bg ="day.jpg"
    }
    else
    {
        bg = "night.jpg"
    }
    back = loadImage(bg);
    console.log(hour);
  } 
 
