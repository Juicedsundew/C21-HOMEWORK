const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var left
var right

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(50, 690, 400, 20);
	left = new Ground(750, 690, 400, 20)
	right = new Ground(780, 690, 400, 20)

	Engine.run(engine);
  
	rectMode(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
	ground.show
	
	rectMode(CENTER);
	background(0);
  
	drawSprites();

	Engine.update(engine)
 
}



