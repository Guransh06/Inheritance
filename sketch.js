const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pig1;
var ground,box1,bgimg;
var bird,box2,box3,box4,pig2,box5;
var log1,log2,log3,log4;
function preload(){
bgimg=loadImage('sprites/bg.png');
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    box1=new Box(700,320,70,70);
    pig1=new Pig(810,350)
    bird=new Bird(100,100);
    box2=new Box(920,320,70,70);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);
pig2=new Pig(810,220);
log1=new Log(810,260,300,PI/2);
log2=new Log(810,180,300,PI/2);
log4=new Log(870,120,150,-PI/7);
log3=new Log(760,120,150,PI/7);
}

function draw(){
    background(bgimg);
    Engine.update(engine);
 
    ground.display();
    box1.display();
    pig1.display();
    bird.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();

}
