class Boy{
    constructor() {
        var options = {
            isStatic : true, 
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(200,600,80,200,options);
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,80,200);
        pop();
      }
}