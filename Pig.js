class Pig {
    constructor(x,y){
        var options = {
            restitution : 0.9,
            friction : 0.4,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER);
        fill("darkgreen");
        strokeWeight("3");
        stroke("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}