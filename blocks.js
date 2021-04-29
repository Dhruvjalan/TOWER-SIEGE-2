var r1, g1, b1;// x1, y1, 
class Block{
    constructor(x,y){
        var options = {
            density: 0.1,
           // isStatic: true
        }

        this.body = Bodies.rectangle(x,y,20,30,options);
        World.add(world, this.body);
        
        this.image = loadImage("block.png")

        this.x = x;
        this.y = y;
        
     
        this.visibility = 255;
    }

    display(r,g,b){
        

    if( this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 20,30 );
        pop();

     }else{
        World.remove(world, this.body);
        push ();
        this.visibility = this.visibility - 5;
         tint (255, this.visibility);
         imageMode (CENTER)
         image(this.image , this.body.position.x, this.body.position.y,20,30);
         pop ();

        }

}

 }