class Striker{
    constructor(x,y){
        var options = {
           // isStatic: false,
            density : 2
        }
      this.body = Bodies.rectangle(x,y,20, 20, options);
      World.add(world, this.body);
      this.image = loadImage("polygon.png");
    }

    display(){
        rectMode(CENTER)
        fill (100,100,0)
        //rect(this.body.position.x, this.body.position.y,20,20);
        imageMode (CENTER);
        image (this.image, this.body.position.x, this.body.position.y, 25 , 25)

       
    }
}
