class Ball {
    constructor(x, y) {
        var options = {
            'density': 1.2,
            'restitution': 0.8
        }

        this.body = Bodies.circle(x, y, 20, options)
        this.ball1 = loadImage("images/ball1.png")
        this.ball2 = loadImage("images/ball2.png")
        this.ball3 = loadImage("images/ball3.png")
        this.ball4 = loadImage("images/ball4.png")
        this.ball5 = loadImage("images/ball5.png")
        this.ball6 = loadImage("images/ball6.png")
        this.r = 20
        World.add(world, this.body)
        this.trajectory = []


    }
    display() {

        var pos = this.body.position
        var angle = this.body.angle

        
        var position = [pos.x, pos.y]
        console.log(position)
        this.trajectory.push(position)

        for(var i = 0; i<this.trajectory.length; i++){

            if(this.trajectory[i][0]>680 && this.trajectory[i][0]<790 && this.trajectory[i][1]>90&& this.trajectory[i][1]<114)
            score++
            this.trajectory = []

        }

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)

if(score<10){
    image(this.ball1,0,0,50,50)
    
}
else if(score >= 10 && score < 20){
    image(this.ball2,0,0,50,50)  

}
else if(score >= 20 && score < 30){
    image(this.ball3,0,0,50,50)  

}
else if(score >= 30 && score < 40){
    image(this.ball4,0,0,50,50)  

}
else if(score >= 40 && score < 50){
    image(this.ball5,0,0,50,50)  
}
else if(score >= 50){
    image(this.ball6,0,0,50,50)  

}

        pop()
    }


}
