class Mangoes{

constructor(x,y,r){

var options={

    isStatic: true,
    restitution:0,
    friction:1


    
}


this.body = Bodies.circle(x,y,r,options);
this.r = r;
    
    
      this.image = loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);

}

display(){
    var p=this.body.position;
    push();
    translate(p.x, p.y);
    rotate(this.body.angle)
    imageMode(CENTER);
    image(this.image, 0, 0,50,50 );
    pop();
  }

}