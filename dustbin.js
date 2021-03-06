class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=160;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.image=loadImage("dustbingreen.png")
		
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/5, this.wallThickness, this.dustbinHeight, {isStatic:true})
	    this.image=loadImage("dustbingreen.png")
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/5, this.y-this.dustbinHeight/5, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.image=loadImage("dustbingreen.png")
		
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
      
	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
    /*
			push()
			translate(posLeft.x, posLeft.y);
			
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("blue")
			stroke(0)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("blue")
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
*/
			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("blue")
			image(this.image,0,0,this.dustbinWidth, this.dustbinHeight);
			pop()
			
	}

}