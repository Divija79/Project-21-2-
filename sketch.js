//const matterMin = require("./matter.min");
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
	createCanvas(400,400);

	//ground = new Ground(200,390,400,20);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,20);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  drawSprites();
 
}



