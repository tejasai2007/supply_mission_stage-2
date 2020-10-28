var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBlock1,redBlock2,redBlock3;
var options = {
	isStatic : true
}
var redBody,redBody1,redBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	
	redBody = Bodies.rectangle(400,630,200,10,options);
	World.add(world,redBody);

	redBody1 = Bodies.rectangle(500,620,20,100);
	World.add(world,redBody1);

	redBody2 = Bodies.rectangle(290,620,20,100);
	World.add(world,redBody2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boat = Bodies.rectangle(300,350,20,20);
	World.add(world,boat);

	
	
	redBlock1 = createSprite(400,700,200,20);
	redBlock2 = createSprite(750,700,20,100);
	redBlock3 = createSprite(750,700,20,100);

	redBlock2.shapeColor = "red";
	redBlock3.shapeColor = "red";
	redBlock1.shapeColor = "red";

	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	redBlock1.x = redBody.position.x;
	redBlock1.y = redBody.position.y;

	redBlock2.x = redBody1.position.x;
	redBlock2.y = redBody1.position.y;

	redBlock3.x = redBody2.position.x;
	redBlock3.y = redBody2.position.y;

	redBlock1.collide(packageSprite);

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,isStatic = false)

	}
}



