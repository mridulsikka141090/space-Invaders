// JavaScript Document

function drawBitmap(array,l_X,l_Y,bitWidth,NumOfBits,width,heigth,color)
{
	var l_tempX=l_X;
	var l_cnt=0;
	for(var i=0;i<NumOfBits;i++)
	{
		l_cnt++;
		if(array[i]==0)	{l_X+=width;}
		if(array[i]==1)	
		{
			g_ctx.fillStyle=color;
			g_ctx.fillRect(l_X,l_Y,width,heigth);	
			l_X+=width;
		}
		if(l_cnt==bitWidth)
		{
			l_Y+=heigth;
			l_X=l_tempX;
			l_cnt=0;
		}
	}
}
