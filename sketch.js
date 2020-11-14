const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ball;
var ground;
var box,box1;







function setup() {
  createCanvas(400,400);
  engine=Engine.create();
world=engine.world;


ground=new Ground(200,390,400,20);

box=new Box(200,100,50,50);
box1=new Box(230,50,50,70);
}

function draw() {
  background(0,0,0); 
Engine.update(engine);
ground.display();
box.display();
box1.display();
}