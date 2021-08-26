class Board {
    constructor(x,y,w,h){
        var options = {
            'density':1,
        'isStatic':true
      }
      this.body =  Matter.Bodies.rectangle(x,y,w,h, options)
      this.sidebody = Matter.Bodies.rectangle(690,95,10,20, options)
      this.bbimage = loadImage("images/bb.png")
      this.w = w
      this.h = h
      World.add(world,this.body)  
      World.add(world, this.sidebody)
      
  
    }
  display(){
  push()
    rectMode(CENTER)
fill('white')
  //  rect(this.body.position.x, this.body.position.y, this.w,this.h)
    
stroke("black")
noFill()
strokeWeight(4)
ellipseMode(RADIUS)
//ellipse(this.body.position.x - 50, this.body.position.y, 50, 10)
imageMode(CENTER)
image(this.bbimage,this.body.position.x-50, this.body.position.y,100,150)
pop()
    
  }




} 
       