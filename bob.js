class bob
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		
		this.radius=radius;
		
		this.body=Bodies.circle(x,y,radius, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}
