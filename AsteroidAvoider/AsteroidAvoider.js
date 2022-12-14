var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore = 0;
var currentState = 0;
var gameState = [];
var menu = new Image();
menu.src = "images/startscreen.png";
var theShip = new Image();
theShip.src = "images/ship.png";
var endMenu = new Image();
endMenu.src = "images/endscreen.jpg";
var theAsteroid = new Image();
theAsteroid.src = "images/asteroid.png";


menu.onload = function () {
    main();
};


//asteroid variables
var numAsteroids = 10;
var asteroids = [];

//player ship var
var ship = new PlayerShip();

//keyboard for event handlers
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up W
            ship.up = true;
        }
        if (e.keyCode == 65) {
            //code for up left A
            ship.left = true;
        }
        if (e.keyCode == 68) {
            //code for right D
            ship.right = true
        }
        if (e.keyCode == 83) {
            //code for down S
            ship.down = true;
        }
    }

    //menu inputs use spacebar
    if (gameOver) {
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //game over inputs
                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                //start game here
                gameStart();
                main();
            } else {
                //main menu inputs
                gameStart();
                currentState = 1;
                gameOver = false;
                main();
                scoreTimer();
            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code for up W
            ship.up = false;

        }
        if (e.keyCode == 65) {
            //code for up left A
            ship.left = false;
        }
        if (e.keyCode == 68) {
            //code for right D
            ship.right = false;
        }
        if (e.keyCode == 83) {
            //code for down S
            ship.down = false;
        }
    }

}

//asteroid class
function Asteroid() {
    //properties to draw the asteroid
    this.radius = randomRange(18, 5);
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width;
    this.y = randomRange(canvas.height - this.radius, this.radius);
    //asteroid speed
    this.vy = randomRange(10, 5);

    this.color = "white";

    //methods (functions) to draw asteroid
    this.drawAsteroid = function () {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.radius, 0 , Math.PI *2,true);

        ctx.closePath();
        ctx.fill();
        ctx.drawImage(theAsteroid, this.x-this.radius, this.y-this.radius, this.radius * 2, this.radius *2);
        //console.log(this.x,this.y,this.radius,this.color);
    };
}

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 50;
    this.height = 50;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    // this.flameLength = 30;

    this.drawShip = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        //draw ship
        //   ctx.fillStyle = "red";
        //   ctx.beginPath();
        //   ctx.moveTo(0, -10);
        //   ctx.lineTo(10, 10);
        //   ctx.lineTo(-10, 10);
        //   ctx.lineTo(0, -10);
        //   ctx.closePath(); 
      //  ctx.fill();
        ctx.drawImage(theShip, -10, -10, this.width, this.height);

        ctx.restore();
    }

    this.moveShip = function () {
        this.x += this.vx;
        this.y += this.vy;

        //adding boundaries for the screen
        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }
        //right
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vx = 0;
        }
        //left
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }
    }

}


function main() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState[currentState]();
    if (!gameOver) {
        //refresh screen
        timer = requestAnimationFrame(main);
    }
}


//main menu state
gameState[0] = function () {
    //code for main menu
    //  ctx.save();
    //ctx.font = "30px Arial";
    //ctx.fillStyle = "white";
    //ctx.textAlign = "center";
    //ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30);
    //ctx.font = "15px Arial";
    //ctx.fillText("press space to start", canvas.width / 2, canvas.height / 2 + 20);

    ctx.drawImage(menu, 0, 0, canvas.width, canvas.height);


    ctx.restore();
}

//play game state
gameState[1] = function () {
    //code for game
    // draw score to screen
    ctx.save();
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30);
    ctx.restore();

    //vertival movement
    if (ship.up) {
        ship.vy = -5;
    } else {
        ship.vy = 3;
    }

    //horizontal movement
    if (ship.left) {
        ship.vx = -3;
    } else if (ship.right) {
        ship.vx = 3;
    } else {
        ship.vx = 0;
    }

    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));

        //collision detection happends here

        if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))) {
            gameOver = true;
            currentState = 2;
            main();
            return;
        }

        if (asteroids[i].x <  - asteroids[i].radius) {
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) ;
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width;
        }

        asteroids[i].x -= asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }

    //draw ship
    ship.drawShip();
    ship.moveShip();

    //adds asteroids
    while (asteroids.length < numAsteroids) {
        asteroids.push(new Asteroid());
    }
}

//game over state
gameState[2] = function () {
    if (score > highScore) {
        highScore = score;
        //code for game over
        ctx.save();
        ctx.drawImage(endMenu, 0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over, your score was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
        ctx.fillText("Your New High Score is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30);
        ctx.fillText("New Record", canvas.width / 2, canvas.height);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 20);

        ctx.restore();
    } else {
        //code for game over
        ctx.save();
        ctx.drawImage(endMenu, 0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over, your score was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60);
        ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space To Play Again ", canvas.width / 2, canvas.height / 2 + 20);
        ctx.restore();
    }
}

//utility function

function gameStart() {
    //for loop to instantiate asteroids for game
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }

    ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;

}

function detectCollision(distance, calDistance) {
    return distance < calDistance;
}

function scoreTimer() {
    if (!gameOver) {
        score++;

        if (score % 5 == 0) {
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        //calls scoreTimer every sec
        setTimeout(scoreTimer, 1000);
    }
}
