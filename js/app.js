// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;//101*x;
    this.y = 83*y-20;
    this.player = 0;
    this.spd = mathRandomRange(200, 400);
    console.log(this.spd);
    this.sprite = 'images/enemy-bug.png';
};

var Player = function(x, y) {
  Enemy.call(this, x, y);
  this.x = 101*x;
  this.y = 80*y-20;
  this.player = 1;
  this.spd = 1;
  this.sprite = "images/char-boy.png";
};

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.contstructor = Player;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.player === 0){
      if(this.x > 503){
        this.x = -98;
        this.spd = mathRandomRange(200, 400);
      }
      else{
        this.x = this.x + this.spd*dt;
      }
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var mathRandomRange = function(min, max){
  return (max - min)*Math.random() + min;
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.handleInput = function(key){
  if(key === "left" && this.x > 0){
  //  console.log("left");
  this.x = this.x - 101*this.spd;
  }
  else if(key === "right" && this.x < 4*101){
  //  console.log("right");
  this.x = this.x + 101*this.spd;
  }
  else if(key === "up" && this.y > 0){
  //  console.log("up");
  this.y = this.y - 80*this.spd;
  }
  else if(key === "down" && this.y < 80*4){
  //  console.log("down");
  this.y = this.y + 80*this.spd;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for(var i = 1; i < 4 ; i++){
  allEnemies.push(new Enemy(26, i));
}
//var allEnemies = [new Enemy(0, 60, 0)];
// Place the player object in a variable called player
var player = new Player(0, 5);

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
