class Ground {
  constructor(x,y,w,h){
    var options = {
        'density':1,
        'isStatic':true
      }
      this.body =  Matter.Bodies.rectangle(x,y,w,h, options)
      this.w = w
      this.h = h
      World.add(world,this.body)  
      
      
  
    }
  display(){
push()
strokeWeight(0)  
    rectMode(CENTER)
    fill(224,153,75)
    rect(this.body.position.x, this.body.position.y, this.w,this.h)
    pop()



    
  }




}