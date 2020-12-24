class Stone{

    constructor(x,y,r){
    
    var options={
    
        isStatic: false,
        restitution:0.5,
        friction:1,
        density:0.1
    
    
        
    }

    
    this.body = Bodies.circle(x,y,r,options);
          //this.width = width;
          //this.height = height;
          this.image = loadImage("Plucking mangoes/stone.png");
          World.add(world, this.body);
    
    }
    
    display(){
        var p=this.body.position;
        push();
        translate(p.x, p.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 40,40);
        pop();
      }
    
    }