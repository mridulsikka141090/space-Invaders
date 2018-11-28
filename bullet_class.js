// JavaScript Document
function c_bullet(l_dir)
{
	this.xpos			= 0;			
	this.ypos			= 0;	
	this.active			= 0;		
	this.y_decrement	= l_dir;
	this.bulletBitmap	= new Array(84);
	if(this.y_decrement<0)
	{
		this.bulletBitmap	= [ 0,0,1,0,0,
								0,1,1,1,0,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1 ]
	}
	if(this.y_decrement>0)
	{
		this.bulletBitmap	= [ 1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								1,1,1,1,1,
								0,1,1,1,0,
								0,0,1,0,0 ]
	}
	this.drawBullet 	= drawBullet;
	this.moveBullet     = moveBullet;  
}
function drawBullet()
{
	drawBitmap(this.bulletBitmap,this.xpos,this.ypos,5,40,1,1,"orange");
}

function moveBullet()
{
	this.ypos+=this.y_decrement;
}
