//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the font
ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "yellow";
ctx.fillText("welcome to the RPS game", 125,280);
ctx.strokeText("welcome to the RPS game", 125,280);



//alert("Select rock, paper, or scissor");

var rps = ["rock", "paper", "scissors"];

//console.log(rps[0]);

document.getElementById("rock").addEventListener("click", function (e) {
    alert("You picked " + rps[0])
    playGame(rps[0]);
});

document.getElementById("paper").addEventListener("click", function (e) {
    alert("You picked " + rps[1])
    playGame(rps[1]);
});

document.getElementById("scissors").addEventListener("click", function (e) {
    alert("You picked " + rps[2])
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                alert("CPU chose rock, tie");
            }
            else if (cpuChoice == 1) {
                alert("CPU chose paper, you lose");
            }
            else {
                alert("CPU chose scissor, you win");
            }

            break;
        case "paper":
            if (cpuChoice == 0) {

                alert("CPU chose rock, you win");
            }
            else if (cpuChoice == 1) {
                alert("CPU chose paper, you tie");
            }
            else {
                alert("CPU chose scissor, you lose");
            }

            break;
        case "scissors":
            if (cpuChoice == 0) {

                alert("CPU chose rock, you lose");
            }
            else if (cpuChoice == 1) {
                alert("CPU chose paper, you win");
            }
            else {
                alert("CPU chose scissor, you tie");
            }

            break;
    }
}
