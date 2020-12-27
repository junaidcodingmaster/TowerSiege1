class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
            friction:1.0,
            density:1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(184, 68, 69);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Blockcolorblue {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
            friction:1.0,
            density:1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(77, 127, 255);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Blockcolorblue2 {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
            friction:1.0,
            density:1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(204, 255, 255);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

// line 65 to 84 block color elements
class Blockcolororange {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.8,
            friction:1.0,
            density:1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255, 153, 51);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
