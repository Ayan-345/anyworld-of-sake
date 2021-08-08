
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

ball = Bodies.circle(100,350,40,[ball_options])
World.add(world,ball)

	Engine.run(engine);
  
	ground = new Ground(width/2,690,width,20);
    leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1300,600,20,120)
	bottomSide = new Ground(1200,670,220,15)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftSide.show()
  rightSide.show()
  bottomSide.show()
  
  
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}



