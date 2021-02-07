
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(350, 600);
	World.add(world, bobObject1);

	Engine.run(engine);
  
}


function draw() {
 
  background(30);
 bobObject1.display();

 
}



