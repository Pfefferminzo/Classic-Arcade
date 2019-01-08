// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    }
    // this method updates the enemies. They can move right (r) or left (l) and the speed is multiplied with the timestamp
    update(dt, enemyNumber) {
          if (this.x < 5) {
          this.x += 1*dt*this.speed;
          } else {
          addNewEnemies(enemyNumber);
        }
    }
  render() {
    // Draw the enemy on the screen, required method for game
    ctx.drawImage(Resources.get(this.sprite),this.x * 101, this.y * 83);
  }
}
// This function adds removes the enemies which ran out of the screen and generate a random one
function addNewEnemies(enemyNumber) {
            allEnemies.splice(enemyNumber, 1);
            let enemy1 = new Enemy(0,getRandomInt(1,4),getRandomInt(1,5));
            allEnemies.splice(enemyNumber, 0, enemy1)
}

// function for randomize the values for enemy generation
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

// player class
class Player {
  constructor() {
    this.name = 'D';
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
  }
  // handles the input of the player with the right keycodes and looks that the player is not moving out of borders
  handleInput(keyCode) {
    if (keyCode === 'left') {

      if (this.x != 0) {
        this.x -= 1;
      }

    }
    else if (keyCode === 'right') {
      if (this.x != 4) {
        this.x += 1;
      }

    }
    else if (keyCode === 'up') {
      if (this.y != 0) {
        this.y -= 1;
      }

    }
    else if (keyCode === 'down') {
      if (this.y != 5) {
        this.y += 1;
      }
    }
  }
  render() {
    // Draw the enemy on the screen, required method for game
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

// Generate the initial enemies with the needed parameters.
let enemy1 = new Enemy(0,1,1);
let enemy2 = new Enemy(4,2,9);
let enemy3 = new Enemy(0,3,4);


// Place the player object in a variable called player
var player = new Player();

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
