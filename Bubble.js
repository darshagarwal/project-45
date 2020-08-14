class Bubble{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;        
    }

    display(){
        ellipse(this.x,this.y,this.radius,this.radius);
    }
}