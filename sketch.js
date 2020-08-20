const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var stone1; 
var ground1, tree1; 
var boy1;
var constraint1; 
var m1, m2, m3, m4, m5, m6, m7; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700); 

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,690,800,10);
	stone1 = new Stone(100,600); 
	boy1 = new Boy(); 
	tree1 = new Tree(600,500,350,600); 

	m1 = new Mango(600,500,30); 
	m2 = new Mango(475,500,30); 
	m3 = new Mango(600,450,30); 
	m4 = new Mango(550,476,30); 
	m5 = new Mango(635,555,30); 
	m6 = new Mango(625,500,30); 
	m7 = new Mango(600,490,30); 

	constraint1 = new Launcher(stone1.body,{x:150,y:520}); 


	//constraint1 = new Launcher(boy1.body,stone1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display(); 
  stone1.display();
  boy1.display();
  tree1.display(); 

  m1.display(); 
  m2.display(); 
  m3.display(); 
  m4.display(); 
  m5.display(); 
  m6.display(); 
  m7.display(); 

  constraint1.display(); 

  detectCollition(m1,stone1); 
  detectCollition(m2,stone1); 
  detectCollition(m3,stone1); 
  detectCollition(m4,stone1); 
  detectCollition(m5,stone1); 
  detectCollition(m6,stone1); 
  detectCollition(m7,stone1); 


  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased() {
	constraint1.fly(); 
}

function detectCollition(m1,s1) {
	var distance = dist(m1.body.position.x,m1.body.position.y,s1.body.position.x, s1.body.position.y); 
	if(distance <= s1.r + m1.r) {
		Matter.Body.setStatic(m1.body,false); 
	}
}


