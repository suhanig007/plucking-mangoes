class Stone {
    constructor(x,y,r) {

        var Options = {
            isStatic: false,
            restituition: 0,
            friction: 1,
            density: 1.2


        }
    
    
this.x = x
this.y = y
this.r = r
this.stone = loadImage("Plucking mangoes/stone.png")
this.body = Bodies.circle(this.x, this.y, this.r/2, Options)
World.add(world, this.body)
  }
display() {
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    imageMode(CENTER)
    // strokeWeight(4)
    // var x = Math.round(random(0, 255))
    // var y = Math.round(random(0, 255))
    // var z = Math.round(random(0, 255))
    // stroke(x, y, z)
    // fill(x, y, z)
    //  ellipse(0, 0, 20,20)
    image(this.stone, 0, 0, this.r * 2, this.r * 2)

    pop();
    } 
}
