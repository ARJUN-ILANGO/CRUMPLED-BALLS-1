
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin1 = new Dustbin(1000,590,220,30);
    dustbin2 = new Dustbin(900,530,20,123);
    dustbin3 = new Dustbin(1100,530,20,123);
    ground1 = new Ground(400,600,1900,15);
    ground2 = new Ground(400,50,1900,15);
    ground3 = new Ground(50,400,15,1900);
    ground4 = new Ground(1300,400,15,1900);
    ball = new Ball(100,520,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin2.display();
  dustbin3.display();
  dustbin1.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
	}
	
  }
  

