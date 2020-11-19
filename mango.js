class Mango {
   constructor(x, y, r) {
      var Options = {
         isStatic: true,
         restitution: 0,
         friction: 1,

      }

      this.x = x
      this.y = y
      this.r = r
   this.mango=loadImage("Plucking mangoes/mango.png")
   this.body=Bodies.circle(this.x,this.y,this.r,Options)
   World.add(world,this.body)
   }
      display() {
     var mangopos=this.body.position
     push ()
     translate(mangopos.x,mangopos.y)
     rotate (this.body.angle)
     ellipseMode(RADIUS)
     imageMode(CENTER)
       // strokeWeight(4)
       // var x = Math.round(random(0, 255))
       // var y = Math.round(random(0, 255))
       // var z = Math.round(random(0, 255))
       // stroke(x, y, z)
       // fill(x, y, z)
      //  ellipse(0, 0, 20,20)
       image(this.mango,0,0,this.r*2,this.r*2)
       
       pop();
      }
   
   }