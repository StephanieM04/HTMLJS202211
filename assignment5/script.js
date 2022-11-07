var canvas = document.getElementById("canvas");
//define the drawing context of the canvas element
var ctx = canvas.getContext('2d');

//draw stuff
//sets up color and outline style
ctx.fillStyle = "rgb(0,0,255)";
ctx.strokeStyle = "black";
ctx.linewidth = "5"; //dont have to specify px or inch

//draws a rectangle: fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(300,30,200,100);
