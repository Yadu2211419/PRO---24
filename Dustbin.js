class Dustbin{
    constructor(x,y){
        
        this.x = x;
        this.y = y;
        this.Dheight = 100;
        this.Dwidth = 200;
        //this.body = Bodies.rectangle(x,y,width,height,options)
        //World.add(world,this.body)
        this.wallThickness = 15
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.Dwidth,this.wallThickness,{isStatic : true})
        this.leftBody = Bodies.rectangle(this.x-this.Dwidth/2,this.y-this.Dheight/2,this.wallThickness,this.Dheight,{isStatic:true})
        Matter.Body.setAngle(this.leftBody,this.angle)
        this.rightBody = Bodies.rectangle(this.x+this.Dwidth/2,this.y-this.Dheight/2,this.wallThickness,this.Dheight,{isStatic:true})
        Matter.Body.setAngle(this.rightBody,-1*this.angle)
        
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)
        World.add(world,this.bottomBody)

    }   

    display(){
        var posB = this.bottomBody.position
        var posL = this.leftBody.position
        var posR = this.rightBody.position
        push()
        translate(posR.x,posR.y)
        rectMode(CENTER)
        stroke("red")
        angleMode(RADIANS)
        fill("red")
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness,this.Dheight)
        pop()

        push()
        translate(posL.x,posL.y)
        rectMode(CENTER)
        stroke("red")
        angleMode(RADIANS)
        fill("red")
        rotate(this.angle)
        rect(0,0,this.wallThickness,this.Dheight)
        pop()

        push()
        translate(posB.x,posB.y)
        rectMode(CENTER)
        stroke("red")
        angleMode(RADIANS)
        fill("red")
        rect(0,0,this.Dwidth,this.wallThickness)
        pop()
    }
}