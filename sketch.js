const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImg;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup(){
 createCanvas(1200,400);


    engine = Engine.create();
    world = engine.world;

    // polygon holder with strings.
    poly = Bodies.circle(50,200,20);
    World.add(world, poly);

    slingShot = new SlingShot(this.poly,{x:100,y:200});
   

//----------------------------------------------------------

    //ground class.
    ground = new Ground(width/2, 400, width, 10);

    //base1,2 means blocks holding base to hold blocks.
    base1 = new Base(width/2,300,200,20);
    base2 = new Base(1000,150,200,20);

    // line 27 to 44 block Section 1

    //level one
    block1 = new Blockcolorblue(519, 235, 30, 40);
    block2 = new Blockcolororange(550, 235, 30, 40);
    block3 = new Blockcolororange(580, 235, 30, 40);
    block4 = new Blockcolororange(610, 235, 30, 40);
    block5 = new Blockcolororange(640, 235, 30, 40);
    block6 = new Blockcolorblue(670, 235, 30, 40);
    //level two
    block7 = new Blockcolorblue(550, 100, 30, 40);
    block8 = new Blockcolorblue(580, 100, 30, 40);
    block9 = new Blockcolorblue(610, 100, 30, 40);
    block10 = new Blockcolorblue(640, 100, 30, 40);
    //level three
    block11 = new Blockcolorblue2(580, 90, 30, 40);
    block12 = new Blockcolorblue2(610, 90, 30, 40);
    //top
    block13 = new Block(600, 20, 30, 40);

 // ----------------------------------------------------------------
  
    // line 50 to 66block Section 2

    //level one
    block14 = new Block(930, 10, 20, 30);
    block15 = new Blockcolorblue2(950, 10, 20, 30);
    block16 = new Blockcolorblue(970, 10, 20, 30);
    block17 = new Blockcolorblue2(990, 10, 20, 30);
    block18 = new Block(1010, 10, 20, 30);
    block19 = new Block(1030, 10, 20, 30);
   //level 2
   block20 = new Blockcolorblue(950, 20, 20, 20);
   block21 = new Blockcolorblue(970, 20, 20, 20);
   block22 = new Blockcolororange(990, 20, 20, 20);
   block23 = new Blockcolorblue(1010, 20, 20, 20);
   //level 3
   block24 = new Blockcolororange(970, 30, 20, 20);
   block25 = new Block(990, 30, 20, 20);
   //top
   block26 = new Block(990, 30, 20, 20);

// -------------------------------------------------------------------
  
}

function draw(){
    background(56, 44, 44);
    
    imageMode(CENTER);
    image(polygonImg,poly.position.x,poly.position.y,40,40);

    Engine.update(engine);
    
    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();

    slingShot.display();

    drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
  slingShot.fly();
}
