var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(x, 300, 20, 0, 2 * Math.PI, true)
ctx.fill()