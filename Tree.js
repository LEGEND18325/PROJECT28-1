class Tree{

constructor(x,y){



this.x = x;
this.y = y;
this.width=450;
		this.height=600;
		this.thickness=10;
this.body = Bodies.rectangle(x,y,width,height,options);

this.image = loadImage("Plucking mangoes/tree.png")
World.add(world, this.body);



}

display(){
    var p =this.body.position;
    imageMode(CENTER);
    fill("brown");
    image(this.image,p.x, p.y, 400, 400);

}

}