class sling1Shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        // this.sling11 = loadImage('sprites/sling11.png');
        // this.sling12 = loadImage('sprites/sling12.png');
        // this.sling13 = loadImage('sprites/sling13.png');
        this.pointB = pointB
        this.sling1 = Constraint.create(options);
        World.add(world, this.sling1);
    }

    fly(){
        this.sling1.bodyA = null;
    }
    attach(body) {
        this.sling1.bodyA=body;
    }
    display(){
        
        if(this.sling1.bodyA){
            var pointA = this.sling1.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2)
            line(pointA.x,pointA.y,pointB.x,pointB.y) 
        }
    }
    
}