
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world


var ball;
var ground;
var dustbin;




function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


    engine = Engine.create();
	world = engine.world;



	ball=new Paper(150,250,50)

	//Create the Bodies Here.
  ground=new Ground(400,580,800,20)
  dustbin=new Dustbin(500,490)
  
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  dustbin.display()
  ball.display()
  drawSprites();
 
}

function keyPressed() {
  if(keyCode=== UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-450})
  }
}