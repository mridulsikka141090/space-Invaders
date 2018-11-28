// JavaScript Document
function c_spaceShip()
{
	this.xpos				= 360;
	this.ypos				= 565;
	this.leftFlag			= 0;
	this.rightFlag			= 0;
	this.trigger_flag		= 0;
	this.boundaryflag		= 0;
	this.collisionFlag		= 0;
	this.incVal				= 5;
	this.bullets			= new Array(g_bulletCount);
	this.tankBitmap	        = new Array(54);
	this.tankBitmap			= [ 0,0,1,0,0,0,1,0,0,
								0,1,0,0,1,0,0,1,0,
								0,0,1,0,1,0,1,0,0,
								0,0,0,1,1,1,0,0,0,
								0,1,1,1,1,1,1,1,0,
								1,1,1,1,1,1,1,1,1 ]
	//tankExplnBitmap1
	this.tankExplnBitmap1	= [ 0,0,0,0,0,0,0,0,0,
								0,0,0,0,0,0,0,0,0,
								0,0,0,0,1,0,0,0,0,
								0,0,0,1,1,1,0,0,0,
								0,0,1,1,1,1,1,0,0,
								0,1,1,1,1,1,1,1,0 ]
	
	this.tankExplnBitmap2	= [ 0,0,0,0,0,0,0,0,0,
								0,0,0,0,1,0,0,0,0,
								0,0,1,0,1,0,1,0,0,
								0,0,0,0,1,0,0,0,0,
								0,0,1,1,1,1,1,0,0,
								1,0,1,1,1,1,1,0,1 ]
	
	this.drawSpaceShip		= drawSpaceShip;
	this.moveShip			= moveShip;
	this.initBullets		= initBullets;
	this.manageBullets		= manageBullets;
	this.drawBullets		= drawBullets;
	this.moveBullets		= moveBullets;
	this.checkBoundary 	    = checkBoundary;
}
//drawBitmap(array,l_X,l_Y,bitWidth,NumOfBits,width,heigth,color)
function drawSpaceShip()
{
	if(this.collisionFlag==0)
	{
		drawBitmap(this.tankBitmap,this.xpos,this.ypos,9,88,5,5,"#ffffff");
	}
	if(this.collisionFlag==1)
	{
		drawBitmap(this.tankExplnBitmap1,this.xpos,this.ypos,9,88,5,5,"#ffffff");	
		if(g_functionCallCounter%10==0)	{drawBitmap(this.tankExplnBitmap2,this.xpos,this.ypos,9,88,5,5,"#ffffff");}
		if(g_functionCallCounter%20==0)	{drawBitmap(this.tankExplnBitmap1,this.xpos,this.ypos,9,88,5,5,"#ffffff");}
		if(g_functionCallCounter%30==0)	{drawBitmap(this.tankExplnBitmap1,this.xpos,this.ypos,9,88,5,5,"#ffffff");}
		if(g_functionCallCounter%30==0)	{ this.collisionFlag=0;}
	}
	
}

function moveShip()
{
	if(this.leftFlag==1)  {this.xpos-=this.incVal;}
	if(this.rightFlag==1) {this.xpos+=this.incVal;}
}
function initBullets()
{
	for(i=0;i<g_bulletCount;i++)
	{
		this.bullets[i]	= new c_bullet(-5);
	}
}
function manageBullets()
{
	var l_bulletThresholdPos=520;
	if((this.trigger_flag==1)&&(  (this.bullets[g_lastFiredBullet].ypos<l_bulletThresholdPos)||(g_firstBullet==1)))
	{
		for(i=0;i<g_bulletCount;i++)
		{
			if(this.bullets[i].active==0)
			{
				this.bullets[i].xpos	= this.xpos+20;
				this.bullets[i].ypos	= this.ypos;
				this.bullets[i].active  = 1;
				g_lastFiredBullet=i;
				g_firstBullet=0;
				break;
			} 
		}
	}
		
}
function drawBullets()  
{
	for(i=0;i<g_bulletCount;i++)
	{
		if(g_spaceShp.bullets[i].active==1)
		{
			this.bullets[i].drawBullet();
		}
	}
}
function moveBullets()
{
	for(i=0;i<g_bulletCount;i++)
	{
		this.bullets[i].moveBullet();
	}
}
function checkBoundary()
{
	if(((this.xpos<0)&&(this.leftFlag==1))||((this.xpos+50>g_canvas.width)&&(this.rightFlag==1))) 
		{this.incVal=0;}
	else 
		{this.incVal=5;}
}
