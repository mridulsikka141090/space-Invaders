// JavaScript Document
//<script type="text/javascript" src="drawBitmap_function.js">

function c_alien(l_x,l_y)
{
	this.xpos					= l_x;
	this.ypos					= l_y;
	this.collisionflag			= 0;
	this.cannon 				= new c_bullet(5);
	this.cannon.y_decrement     = 5;
	this.trigger				= 0;
	this.frameFlag				= 1;
	this.explosionFlag			= 0;
	this.alienFrame_1			= new Array(88);
    this.alienFrame_2 			= new Array(88);
    this.alienFrame_1			= [ 0,0,1,0,0,0,0,0,1,0,0,
									0,0,0,1,0,0,0,1,0,0,0,
									0,0,1,1,1,1,1,1,1,0,0,
									0,1,1,0,1,1,1,0,1,1,0,
									1,1,1,1,1,1,1,1,1,1,1,
									1,0,1,1,1,1,1,1,1,0,1,
									1,0,1,0,0,0,0,0,1,0,1,
									0,0,0,1,1,0,1,1,0,0,0 ]
		   
	this.alienFrame_2			= [ 0,0,1,0,0,0,0,0,1,0,0,
									1,0,0,1,0,0,0,1,0,0,1,
									1,0,1,1,1,1,1,1,1,0,1,
									1,1,1,0,1,1,1,0,1,1,1,
									1,1,1,1,1,1,1,1,1,1,1,
									0,0,1,1,1,1,1,1,1,0,0,
									0,0,1,0,0,0,0,0,1,0,0,
									0,1,0,0,0,0,0,0,0,1,0 ]
	
	this.alienFrame_3			= [ 0,1,0,0,0,1,0,0,0,1,0,
									0,0,1,0,0,1,0,0,1,0,0,
									0,0,0,1,0,1,0,1,0,0,0,
									1,1,1,0,0,0,0,0,1,1,1,
									0,0,0,1,0,1,0,1,0,0,0,
									0,0,1,0,0,1,0,0,1,0,0,
									0,1,0,0,0,1,0,0,0,1,0 ]
		 
	
	this.drawAlien				= drawAlien;
	this.managebullet			= managebullet;
}

function drawAlien()
{
	if(this.collisionflag!=1)
	{
		if(this.frameFlag==1) 
		{
			drawBitmap(this.alienFrame_1,this.xpos,this.ypos,11,88,4,4,"#00ff00");
		}
		if(this.frameFlag==-1) 
		{
			drawBitmap(this.alienFrame_2,this.xpos,this.ypos,11,88,4,4,"#00ff00");
		}
	}
	if((this.collisionflag==1)&&(this.explosionFlag==0))
	{
		drawBitmap(this.alienFrame_3,this.xpos,this.ypos,11,88,4,4,"#00ff00");
		this.explosionFlag=1;
	}
}

function managebullet()
{
	if(this.trigger==1)
	{
		this.cannon.xpos	= this.xpos+15;     //15= to fire bullet from the center of the spaceship
		this.cannon.ypos	= this.ypos+28;
		this.cannon.active  = 1;
		this.trigger=0;
	}
}
