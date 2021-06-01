var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var groundSprite , ground , grdImg;
var moon , chanda;
var cloud , baadal;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sHide , hide , sHide2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	grdImg = loadImage("grnd.png")
	chanda = loadImage("moon.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.addImage("g",grdImg)
	groundSprite.shapeColor=color(255)
	groundSprite.scale = 0.2;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	moon = createSprite(700,100,10,10);
	moon.addImage(chanda);
	moon.scale = 0.15;

	sHide = createSprite(310,height- 80 , 20 , 100);
	sHide.shapeColor=("red");

	side = createSprite(width/2,height-25 , 200 , 20);
	side.shapeColor=("red");

	hide = createSprite(490 ,height-80 , 20 , 100);
	hide.shapeColor=("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyDown(DOWN_ARROW)){

	pfall();

  }
  drawSprites();
 
}

function pfall() {
 if (keyDown (DOWN_ARROW)) {
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
	World.add(world, ground);
	
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
  }
}



