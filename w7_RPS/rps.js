//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

var wins = 0;
var losses = 0;
var ties = 0;

rock.src = "images/rock.jpg"
paper.src = "images/paper.png"
scissors.src = "images/scissors.png"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

hscissors.onload = function () {
    draw(rock, paper, scissors, rock, paper, scissors);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var gameOverEnding = false;
var playerWin = true;

var results = "select rock, paper, scissors above";

function onKeyDown(e) {
    console.log(e.keyCode);
}
function onKeyUp(e) {
    if (e.keyCode == 32) {
        console.log("you pressed spacebar");
        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}

function draw(rock, paper, scissors, crock, cpaper, cscissors) {
    if (gameOver == true) {

        if (!gameOverEnding) {
            //drawing the font

            ctx.font = "40px Arial";
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "yellow";
            ctx.textAlign = "center";
            ctx.fillText("welcome to the RPS game", canvas.width / 2, 280);
            ctx.fillText("press space to start", canvas.width / 2, 320);
            ctx.strokeText("welcome to the RPS game", canvas.width / 2, 280);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (playerWin) {
                //drawing the font

                ctx.font = "40px Arial";
                ctx.fillStyle = "blue";
                ctx.strokeStyle = "yellow";
                ctx.textAlign = "center";
                ctx.fillText("player wins", canvas.width / 2, 280);




            } else {
                //drawing the font

                ctx.font = "40px Arial";
                ctx.fillStyle = "blue";
                ctx.strokeStyle = "yellow";
                ctx.textAlign = "center";
                ctx.fillText("Player lost", canvas.width / 2, 280);


            }
        }

    }
    else {
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial"
        ctx.textAlign = "center";
        ctx.fillStyle = "blue";

        ctx.fillText("Rock Paper Scissors", canvas.width / 2, 50);

        //player choice
        ctx.fillText("player choice", canvas.width / 2, 100);
        ctx.drawImage(rock, canvas.width / 2 - 300, 150);

        ctx.drawImage(paper, canvas.width / 2 - 50, 150);

        ctx.drawImage(scissors, canvas.width / 2 + 200, 150);
        //computer choices
        ctx.fillText("computer choice", canvas.width / 2, 325);
        ctx.drawImage(crock, canvas.width / 2 - 300, 355);
        ctx.drawImage(cpaper, canvas.width / 2 - 50, 355);
        ctx.drawImage(cscissors, canvas.width / 2 + 200, 355);

        ctx.fillText(results, canvas.width / 2, 525);
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
    if (gameOver == true) {
        return;
    } else {
        var cpuChoice = Math.floor(Math.random() * 2.99);
        // console.log(cpuChoice, playerChoice);
        var wins = parseInt(document.getElementById("wins").innerHTML);
        var losses = parseInt(document.getElementById("losses").innerHTML);
        console.log(wins, losses);
        if (wins == 10 || losses == 10) {
            if (wins == 10) {
                console.log("You win")
                playerWin = true
            } else {
                console.log("You Lose")
                playerWin = false;
            }
            console.log(playerWin)
            gameOver = true;
            gameOverEnding = true;
            draw(rock, paper, scissors, rock, paper, scissors);
        }
        switch (playerChoice) {
            case "rock":
                if (cpuChoice == 0) {
                    //alert("CPU chose rock, tie");
                    results = "CPU chose rock, tie";
                    draw(hrock, paper, scissors, hrock, paper, scissors);
                    //found help online
                    var ties = document.getElementById("ties");
                    ties.innerHTML = parseInt(ties.innerHTML) + 1;


                }
                else if (cpuChoice == 1) {
                    //alert("CPU chose paper, you lose");
                    results = "CPU chose paper, you lose";
                    draw(hrock, paper, scissors, rock, hpaper, scissors);
                    //found help online
                    var losses = document.getElementById("losses");
                    losses.innerHTML = parseInt(losses.innerHTML) + 1;
                }
                else {
                    //alert("CPU chose scissor, you win");
                    results = "CPU chose scissors, you win";
                    draw(hrock, paper, scissors, rock, paper, hscissors);
                    //found help online
                    var wins = document.getElementById("wins");
                    wins.innerHTML = parseInt(wins.innerHTML) + 1;
                }

                break;
            case "paper":
                if (cpuChoice == 0) {

                    //alert("CPU chose rock, you win");
                    results = "CPU chose rock, you win";
                    draw(rock, hpaper, scissors, hrock, paper, scissors);
                    //found help online
                    var wins = document.getElementById("wins");
                    wins.innerHTML = parseInt(wins.innerHTML) + 1;
                }
                else if (cpuChoice == 1) {
                    //alert("CPU chose paper, you tie");
                    results = "CPU chose paper, you tie";
                    draw(rock, hpaper, scissors, rock, hpaper, scissors);
                    //found help online
                    var ties = document.getElementById("ties");
                    ties.innerHTML = parseInt(ties.innerHTML) + 1;
                }
                else {
                    //alert("CPU chose scissor, you lose");
                    results = "CPU chose scissors, you lose";
                    draw(rock, hpaper, scissors, rock, paper, hscissors);
                    //found help online
                    var losses = document.getElementById("losses");
                    losses.innerHTML = parseInt(losses.innerHTML) + 1;
                }

                break;
            case "scissors":
                if (cpuChoice == 0) {

                    //alert("CPU chose rock, you lose");
                    results = "CPU chose rock, you lose";
                    draw(rock, paper, hscissors, hrock, paper, scissors)
                    //found help online
                    var losses = document.getElementById("losses");
                    losses.innerHTML = parseInt(losses.innerHTML) + 1;
                }
                else if (cpuChoice == 1) {
                    //alert("CPU chose paper, you win");
                    results = "CPU chose paper, you win";
                    draw(rock, paper, hscissors, rock, hpaper, scissors);
                    //found help online
                    var wins = document.getElementById("wins");
                    wins.innerHTML = parseInt(wins.innerHTML) + 1;
                }
                else {
                    //alert("CPU chose scissor, you tie");
                    results = "CPU chose scissors, you tie";
                    draw(rock, paper, hscissors, rock, paper, hscissors);
                    //found help online
                    var ties = document.getElementById("ties");
                    ties.innerHTML = parseInt(ties.innerHTML) + 1;
                }

                break;
        }


    }

    /* var cpuChoice = Math.floor(Math.random() * 2.99);
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
     }*/
}
