
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
this.boy=loadImage("Plucking mangoes/boy.png")	
}
var world,engine
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	treeObject=new tree (1050,500,80)
	mango1=new Mango(1100,100,30)
	mango2=new Mango(1170,130,30)
	mango3=new Mango(1010,140,30)
	mango4=new Mango(1000,70,30)
	mango5=new Mango(1100,70,30)
	mango6=new Mango(1000,230,30)
	mango7=new Mango(900,230,30)
	mango8=new Mango(1140,150,40)
	mango9=new Mango(1200,200,40)
	mango10=new Mango(1100,200,40)
    stone=new Stone(200,420,30)
	groundObject=new Ground(width/2,600,width,20)
	sling=new sling1Shot(stone.body,{x:235,y:420})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,340,200,300)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  treeObject.display()
  groundObject.display()
  stone.display()
  sling.display()
  detectcollision(mango1,stone)
  detectcollision(mango2,stone)
  detectcollision(mango3,stone)
  detectcollision(mango4,stone)
  detectcollision(mango5,stone)
  detectcollision(mango6,stone)
  detectcollision(mango7,stone)
  detectcollision(mango8,stone)
  detectcollision(mango9,stone)
  detectcollision(mango10,stone)
  
 
  drawSprites();

 
}

function detectcollision(mango1,stone1) {
	mangoBodyPostion=mango1.body.position
	stoneBodyPosition=stone1.body.position
    console.log(mangoBodyPosition)
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<=mango1.r+stone1.r) {
		Matter.body.setStatic(mango1,body,false)
	    
	}
    
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
    if (keyCode === 32) {
        sling.attach(stone.body)
    }
}

	





