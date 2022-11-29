//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

hscissors.onload = function(){
    draw(rock,paper,scissors,rock,paper,scissors);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "select rock, paper, scissors above";

function onKeyDown(e){
    console.log(e.keyCode);
}
function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("you pressed spacebar");
        gameOver = false;
        draw(rock,paper,scissors,rock,paper,scissors);
    }
}

function draw(rock,paper,scissors,crock,cpaper,cscissors){
if(gameOver == true){
  
//drawing the font

ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "yellow";
ctx.textAlign = "center";
ctx.fillText("welcome to the RPS game", canvas.width/2,280);
ctx.fillText("press space to start", canvas.width/2,320);
ctx.strokeText("welcome to the RPS game", canvas.width/2,280);  
    }
    else {
        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Arial"
        ctx.textAlign = "center";
        ctx.fillStyle = "pink";
        //player choice
        ctx.fillText("player choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2 - 100, 150);
        ctx.drawImage(paper, canvas.width/2, 150);
        ctx.drawImage(scissors, canvas.width/2 + 100, 150);
        //computer choices
        ctx.fillText("computer choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width/2, 375);
        ctx.drawImage(cscissors, canvas.width/2 + 100, 375);

        ctx.fillText(results, canvas.width/2, 525);
        ctx.restore();
    }
}

draw();



//alert("Select rock, paper, or scissor");

var rps = ["rock", "paper", "scissors"];

//console.log(rps[0]);

document.getElementById("rock").addEventListener("click", function (e) {
    //draw(rock,paper,scissors,rock,paper,scissors);
    playGame(rps[0]);
});

document.getElementById("paper").addEventListener("click", function (e) {
    //alert("You picked " + rps[1])
    playGame(rps[1]);
});

document.getElementById("scissors").addEventListener("click", function (e) {
    //alert("You picked " + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice) {
        if (gameOver == true){
            return;
        } else {
            var cpuChoice = Math.floor(Math.random() * 2.99);
            console.log(cpuChoice, playerChoice);
        
            switch (playerChoice) {
                case "rock":
                    if (cpuChoice == 0) {
                        //alert("CPU chose rock, tie");
                        results = "CPU chose rock, tie";
                        draw(hrock,paper,scissors, hrock, paper, scissors);
                    }
                    else if (cpuChoice == 1) {
                        //alert("CPU chose paper, you lose");
                        results = "CPU chose paper, you lose";
                        draw(hrock,paper,scissors, rock, hpaper, scissors);
                    }
                    else {
                        //alert("CPU chose scissor, you win");
                        results = "CPU chose scissors, you win";
                        draw(hrock,paper,scissors, rock, paper, hscissors);
                    }
        
                    break;
                case "paper":
                    if (cpuChoice == 0) {
        
                        //alert("CPU chose rock, you win");
                        results = "CPU chose rock, you win";
                        draw(rock,hpaper,scissors, hrock, paper, scissors);
                    }
                    else if (cpuChoice == 1) {
                        //alert("CPU chose paper, you tie");
                        results = "CPU chose paper, you tie";
                        draw(rock,hpaper,scissors, rock, hpaper, scissors);
                    }
                    else {
                        //alert("CPU chose scissor, you lose");
                        results = "CPU chose scissors, you lose";
                        draw(rock,hpaper,scissors, rock, paper, hscissors);
                    }
        
                    break;
                case "scissors":
                    if (cpuChoice == 0) {
        
                        //alert("CPU chose rock, you lose");
                        results = "CPU chose rock, you lose";
                        draw(rock,paper,hscissors, hrock, paper, scissors)
                    }
                    else if (cpuChoice == 1) {
                        //alert("CPU chose paper, you win");
                        results = "CPU chose paper, you win";
                        draw(rock,paper,hscissors, rock, hpaper, scissors);
                    }
                    else {
                        //alert("CPU chose scissor, you tie");
                        results = "CPU chose scissors, you tie";
                        draw(rock,paper,hscissors, rock, paper, hscissors);
                    }
        
                    break;
            }
        }

    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //alert("CPU chose rock, tie");
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose paper, you lose");
            }
            else {
                //alert("CPU chose scissor, you win");
            }

            break;
        case "paper":
            if (cpuChoice == 0) {

                //alert("CPU chose rock, you win");
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose paper, you tie");
            }
            else {
                //alert("CPU chose scissor, you lose");
            }

            break;
        case "scissors":
            if (cpuChoice == 0) {

                //alert("CPU chose rock, you lose");
            }
            else if (cpuChoice == 1) {
                //alert("CPU chose paper, you win");
            }
            else {
                //alert("CPU chose scissor, you tie");
            }

            break;
    }
}
