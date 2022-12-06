var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 58;
var finish = 956;
var carPos = 2;
var speed = 3;
var carWidth = 70;

var startFuel = randomNumber(canvas.width, 600);
var fuel = startFuel;
var fuelBarWidth = 520;
var gameOver = true;

var seconds = 3;
var fps = 60;
var frames = fps;

//load game sprites
var carSprite = new Image();
carSprite.src = "images/dragon.png";

carSprite.onload = function(){
    main();
}

//add some event listeners
document.addEventListener("keydown", keyPressDown);

function keyPressDown(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel <= 0){
        //restart game
        restartGame();
    }
}


function main(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if(gameOver){
        ctx.fillStyle = "black";
        ctx.font = "30px Times New Roman";
        ctx.textAlign = "center";
        ctx.fillText("press space to start", canvas.width/2, canvas.height/2);
    }else{

        if (!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }else{
            if(fuel > 0){
                carPos += speed;
                fuel -= speed;
            }
        
        }
        drawStartFinish();
        drawCar();
    
        fuelOverlay();
        if(carPos + carWidth > finish || fuel <= 0){
            drawResults();
        }

        drawFuelBar();
        if(carPos + carWidth > finish || fuel <= 0){
            drawResults();
        }


    }

    timer = requestAnimationFrame(main);
}

function drawStartFinish(){
    ctx.fillStyle = "blue";
    //start line
    ctx.fillRect(start, 50, 10, 700);
    //finish line
    ctx.fillRect(finish, 50, 10, 700);
}



function drawCar(){
    //draw a car
   // ctx.fillStyle = "red";
   // ctx.fillRect(carPos, canvas.height/2, carWidth, 20);
    ctx.drawImage(carSprite, carPos, canvas.height/2, carWidth, 80)
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "gray";
    ctx.fillRect(start,30, fuelBarWidth, 10);
    ctx.font ="25px Times New Roman";
    ctx.fillText("Energy", start, 25);
    if(fuel > 0){
        ctx.fillStyle = "red";
        ctx.fillRect(start, 30, currentBarWidth, 10);
    }
}

function fuelOverlay(){
    ctx.fillStyle = "rgba(32,178,170,0.5)";
    ctx.fillRect(20, 5, 560, 40);
}

function drawResults(){
    if(carPos + carWidth > finish){
        ctx.fillStyle = "black";
        ctx.font = "25px Times New Roman";
        ctx.textAlign = "center";
        ctx.fillText("You made it to the finish... You win", canvas.width/2, canvas.height/2);
    }else{
        ctx.fillStyle = "black";
        ctx.font = "25px Times New Roman";
        ctx.textAlign = "center";
        ctx.fillText("You got too tired... You lose", canvas.width/2, canvas.height/2);
    }
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames<0){
        frames = fps;
        seconds -= 1;
    }
}

function drawStartTimer(){
    ctx.fillStyle = "black";
    ctx.font = "25px Times New Roman";
    ctx.textAlign = "center";
    ctx.fillText(seconds, canvas.width/2, canvas.height/2);
}

function randomNumber(high,low){
    return Math.round(Math.random() * (high-low) + low);
}