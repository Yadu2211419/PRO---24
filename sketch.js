var dustbin,paper,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(600,680);
	paper = new Paper(200,600,25);
	ground = new Ground(400,690,800,20);

    //var render = Render.create({
	//	element: document.body,
	//	engine: engine,
	//	options: {
	//	  width: 1200,
	//	  height: 700,
	//	  wireframes: false
	//	}
	  //});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display()
  paper.display(
 ground.display()
  )
}

function keyPressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



