
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree,treeimg;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone;
var juno;
var boyimg,boy;
var slingshot;
function preload()
{
  boyimg=loadImage("Plucking mangoes/boy.png")
  treeimg=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,500,1200,50);
	//tree = new Tree(600,300,10,10)
	
	mango1 = new Mangoes(600,200,10,10)
	mango2 = new Mangoes(560,155,10,10)
	mango3 = new Mangoes(450,230,10,10)
	mango4 = new Mangoes(650,160,10,10)
	mango5 = new Mangoes(500,290,10,10)
	mango6 = new Mangoes(650,260,10,10)
	mango7 = new Mangoes(700,200,10,10)
	mango8 = new Mangoes(750,240,10,10)
	stone = new Stone(250,400,40,40)
  //juno = new Juno(250,450,10,10)
//  boy=createSprite(250,420,0,0)
 // boy.addImage(boyimg)
  
	slingshot = new Slingshot(stone.body,{x:200,y:380});
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // Engine.update(engine);
  background(0);
  image(boyimg,165,330,200,200)
  image(treeimg,400,100,400,400)

   ground.display();
  //tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
 
  slingshot.display();  
 
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
}


function detectollision(lstone,lmango){
mangoBodyPosition= lmango.body.position

stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false)
}
}
    
function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	slingshot.fly();
	
	
	
	
	}
	




