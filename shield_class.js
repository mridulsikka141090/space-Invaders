// JavaScript Document
function c_shield()
{
	this.xpos				= 0;
	this.ypos				= 0;
	this.bitMapWidth			= 40;
	this.bitMapHeight			= 24;
	this.xposArray	        = new Array(5);
	this.yposArray	        = new Array(5);
	this.shieldBitmapLevOfPrt	= new Array(5);
	this.shieldBitmapPrt_1_Lev_1	        = new Array(15);
	this.shieldBitmapPrt_1_Lev_2	        = new Array(15);
	this.shieldBitmapPrt_2_Lev_1	        = new Array(15);
	this.shieldBitmapPrt_2_Lev_2	        = new Array(15);
	this.shieldBitmapPrt_3_Lev_1	        = new Array(15);
	this.shieldBitmapPrt_3_Lev_2	        = new Array(15);
	this.shieldBitmapPrt_4_Lev_1	        = new Array(15);
	this.shieldBitmapPrt_4_Lev_2	        = new Array(15);
	this.shieldBitmapPrt_5_Lev_1	        = new Array(15);
	this.shieldBitmapPrt_5_Lev_2	        = new Array(15);
	this.shieldBitmap_Lev_3	      			= new Array(15);
									
	this.shieldBitmapPrt_1_Lev_1= [ 0,0,1,1,1,
									0,1,1,1,1,
									1,1,1,1,1 ];
											
	this.shieldBitmapPrt_1_Lev_2= [ 1,0,0,0,1,
									0,0,1,0,1,
									0,1,0,0,1 ]	;
									
	this.shieldBitmapPrt_2_Lev_1= [ 1,1,1,1,1,
									1,1,1,1,1,
									1,1,1,1,1 ];
											
	this.shieldBitmapPrt_2_Lev_2= [ 0,0,0,0,1,
									1,0,1,0,1,
									1,0,0,1,1 ]	;
									
    this.shieldBitmapPrt_3_Lev_1= [ 1,1,1,0,0,
									1,1,1,1,0,
									1,1,1,1,1 ];
											
	this.shieldBitmapPrt_3_Lev_2= [ 0,1,0,0,0,
									0,0,1,0,0,
									1,1,0,0,1 ]	;
									
	this.shieldBitmapPrt_4_Lev_1= [ 1,1,1,1,0,
									1,1,1,1,0,
									1,1,1,1,0 ];
											
	this.shieldBitmapPrt_4_Lev_2= [ 0,1,0,1,0,
									1,0,1,0,0,
									0,0,0,1,0 ]	;
	
	this.shieldBitmapPrt_5_Lev_1= [ 0,1,1,1,1,
									0,1,1,1,1,
									0,1,1,1,1 ];
											
	this.shieldBitmapPrt_5_Lev_2= [ 0,1,0,0,1,
									0,0,1,0,0,
									0,1,0,0,1 ]	;
									
	this.shieldBitmap_Lev_3 = [ 0,0,0,0,0,
								0,0,0,0,0,
								0,0,0,0,0 ]	;
									
	this.drawShield		= drawShield;
	this.initXYposArray = initXYposArray;
	
}

function initXYposArray()
{
	this.xposArray[0]=this.xpos;
	this.yposArray[0]=this.ypos;
	this.shieldBitmapLevOfPrt[0]	= 1;
	for(var i=1;i<5;i++)
	{
		this.xposArray[i]=this.xposArray[i-1]+this.bitMapWidth;
		this.yposArray[i]=this.yposArray[i-1];
		if(i==3)
		{
			this.xposArray[i]=this.xposArray[0];
			this.yposArray[i]=this.yposArray[i-1]+this.bitMapHeight;
		}
		if(i==4)
		{
			this.xposArray[i]=this.xposArray[i-1]+(this.bitMapWidth*2);
			this.yposArray[i]=this.yposArray[i-1];
		}
		this.shieldBitmapLevOfPrt[i]	= 1;
	}
}

function drawShield()
{
	var l_array=new Array();
	for(var j=1;j<6;j++)
	{
		if(j==1)
		{
			if(this.shieldBitmapLevOfPrt[j-1]==1)	{l_array=this.shieldBitmapPrt_1_Lev_1; }
			if(this.shieldBitmapLevOfPrt[j-1]==2)	{l_array=this.shieldBitmapPrt_1_Lev_2; }
			if(this.shieldBitmapLevOfPrt[j-1]==3)	{l_array=this.shieldBitmap_Lev_3; }
		}
		if(j==2)
		{
			if(this.shieldBitmapLevOfPrt[j-1]==1)	{l_array=this.shieldBitmapPrt_2_Lev_1; }
			if(this.shieldBitmapLevOfPrt[j-1]==2)	{l_array=this.shieldBitmapPrt_2_Lev_2; }
			if(this.shieldBitmapLevOfPrt[j-1]==3)	{l_array=this.shieldBitmap_Lev_3; }
		}
		if(j==3)
		{
			if(this.shieldBitmapLevOfPrt[j-1]==1)	{l_array=this.shieldBitmapPrt_3_Lev_1; }
			if(this.shieldBitmapLevOfPrt[j-1]==2)	{l_array=this.shieldBitmapPrt_3_Lev_2; }
			if(this.shieldBitmapLevOfPrt[j-1]==3)	{l_array=this.shieldBitmap_Lev_3; }
		}
		if(j==4)
		{
			if(this.shieldBitmapLevOfPrt[j-1]==1)	{l_array=this.shieldBitmapPrt_4_Lev_1; }
			if(this.shieldBitmapLevOfPrt[j-1]==2)	{l_array=this.shieldBitmapPrt_4_Lev_2; }
			if(this.shieldBitmapLevOfPrt[j-1]==3)	{l_array=this.shieldBitmap_Lev_3; }
		}
		if(j==5)
		{
			if(this.shieldBitmapLevOfPrt[j-1]==1)	{l_array=this.shieldBitmapPrt_5_Lev_1; }
			if(this.shieldBitmapLevOfPrt[j-1]==2)	{l_array=this.shieldBitmapPrt_5_Lev_2; }
			if(this.shieldBitmapLevOfPrt[j-1]==3)	{l_array=this.shieldBitmap_Lev_3; }
		}
			
	
		drawBitmap(l_array,this.xposArray[j-1],this.yposArray[j-1],5,15,8,8,"#cc9966");
		
	}
}
