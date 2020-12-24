class Juno {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking mangoes/boy.png");
      World.add(world, this.body);
    }
    display(){
      var p =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,p.x, p.y, 250, 250);
    }
  };
