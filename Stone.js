class Stone{

    constructor(x,y,r){
    
    var options={
    
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2
    
    
        
	}
	
	
		
    this.body = Bodies.circle(x,y,r,options);
	this.r=r
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