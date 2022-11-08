var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

//circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.linewidth = "5";
ctx.beginPath();
ctx.arc(384, 441, 67, 0, 2 * Math.PI, true)
ctx.fill()
ctx.stroke();
//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.linewidth = "5";
ctx.fillRect(86,300,99,100);
ctx.strokeRect(86,300,99,100);
//line

ctx.strokeStyle = "rgb(255,0,0";
ctx.linewidth = "5";
ctx.beginPath();
ctx.moveTo(85,681);
ctx.lineTo(278,550);
ctx.stroke();

//hexagon
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.linewidth = "5";

ctx.beginPath();
ctx.moveTo(558,309);
ctx.lineTo(666,283);
ctx.lineTo(724,379);
ctx.lineTo(650,464);
ctx.lineTo(548,419);
ctx.closePath();
ctx.fill();
ctx.stroke();

//star
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.linewidth = "5";

ctx.beginPath();
ctx.moveTo(636,497);
ctx.lineTo(668,554);
ctx.lineTo(733,566);
ctx.lineTo(688,616);
ctx.lineTo(696,681);
ctx.lineTo(637,653);
ctx.lineTo(576,681);
ctx.lineTo(583,615);
ctx.lineTo(538,567);
ctx.lineTo(606,554);
ctx.closePath();
ctx.fill();
ctx.stroke();