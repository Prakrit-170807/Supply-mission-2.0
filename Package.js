class Package{
    constructor(x,y,width,height){
        this.width = width
        this.height = height

        var options={
            restitution:.45, isStatic:true
        }

        this.packageBody = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.packageBody)
    }
    display(){
        push()
        translate(this.packageBody.position.x,this.packageBody.position.y)
        rotate(this.packageBody.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}