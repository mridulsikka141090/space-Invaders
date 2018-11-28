// JavaScript Document
function c_menu()
{
	this.score=0;
	this.scrX=0;
	this.scrY=0;
	this.lives=3;
	this.livX=0;
	this.livY=0;
	this.gameName="";
	this.nameX=0;
	this.nameY=0;
	this.restartFlag=0;
	this.pauseFlag=1;
	this.startFlag=0;
	this.gameoverFlag=0;
	this.winnerFlag=0;
	this.highScoreFlag=1;
	
	this.drawMenu = drawMenu;
	this.drawScore = drawScore;
	this.drawEndOfGame=drawEndOfGame;
	this.drawLives = drawLives;
	this.restartGame = restartGame;
	this.drawHighScore = drawHighScore;
}
function drawMenu()
{
	g_ctx.font="30px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(this.gameName,this.nameX,this.nameY,250);
	
	g_ctx.strokeRect(300,200,210,80)
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText("START",365,248,200);
	
	g_ctx.strokeRect(300,300,210,80)
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText("HIGH SCORES",330,345,200);
	
}
function drawScore()
{
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText("Score:"+this.score,this.scrX,this.scrY,250);
	
}
function drawLives()
{
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillText("Lives: "+this.lives,this.livX,this.livY,100);
}
function drawEndOfGame()
{
	if(this.gameoverFlag==1)
	{
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillText("GAMEOVER!!",340,40,100);
	}
	if(this.winnerFlag==1)
	{
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillText("You Win!!",340,40,100);
	}
}
function drawHighScore()
{
	g_ctx.font="30px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText("High Scores",this.nameX+50,this.nameY,150);
	
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(localStorage.getItem('N1')+"----------"+localStorage.getItem('S1'),300,250,250);
	
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(localStorage.getItem('N2')+"----------"+localStorage.getItem('S2'),300,300,250);
	
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(localStorage.getItem('N3')+"----------"+localStorage.getItem('S3'),300,350,250);
	
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(localStorage.getItem('N4')+"----------"+localStorage.getItem('S4'),300,400,250);
	
	g_ctx.font="20px Comic Sans MS bold"
	g_ctx.fillStyle="#33ccff";
	g_ctx.fillText(localStorage.getItem('N5')+"----------"+localStorage.getItem('S5'),300,450,250);
	
	
	
}
function restartGame()
{
	if(this.restartFlag==1)  {window.location.reload();}
}
