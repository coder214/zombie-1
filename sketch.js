const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base, rightWall, leftWall;
var bridge;
var jointPoint, jointLink;

var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(width-1520,height-50,width, height/15);
  
  rightWall = new Base(1398, 300, 100, 400);
  leftWall = new Base(2, 300, 100, 400);

  bridge = new Bridge(20, {x:100, y:300});
  jointPoint = new Base(1900,300, 10, 10);

  Composite.add(bridge.body, jointPoint);
 // jointLink = new Link( bridge.body, jointPoint);
}

function draw() {
  background(51);
  Engine.update(engine);

  base.display();
  rightWall.display();
  leftWall.display();

  bridge.show();

  for(var d = 0; d < stones.length; d++){
    displayStones();
  }
}

function displayStones(){
  for(var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

