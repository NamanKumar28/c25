
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{bin = loadImage("Sprites/dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20)
    ball = new Ball(100,680,20)
   box1 = new Dustbin(600,670,200,20)
   box2 = new Dustbin(490,630,20,100)
   box3 = new Dustbin(709,630,20,100)
	Engine.run(engine);
  
}

function draw() {
  

  rectMode(CENTER);
  background(255);
  image (bin,480,580,240,100)
  ground.display()
  ball.display();
  //box1.display();
  //box2.display();
  //box3.display();

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:105,y:105})
	}
}

 



