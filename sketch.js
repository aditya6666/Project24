var ground, paper, dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,150,20);
	dustbin1 = new Dustbin(700,150,200,20);
	dustbin2 = new Dustbin(730,130,20,100);
	dustbin3 = new Dustbin(670,130,20,100);

	ground = new Ground(width/2, 150, width, 10);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-85});

}



