var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");


ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.linewidth = "5";
ctx.beginPath();
ctx.arc(384, 441, 67, 0, 2 * Math.PI, true)
ctx.fill()

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.linewidth = "5";
ctx.fillRect(86,300,99,100);
ctx.strokeRect(86,300,99,100);