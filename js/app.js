// Default for all game entities
var GameEntity = function(){
  this.x = 0;
  this.y = 0;
  this.spd = 0;
  this.sprite = "";
};

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    GameEntity.call(this);
    this.x = x;
    this.y = 83*y-20;
    //player flag is used to let update use logic based
    //on whether Object is player or enemy
    //Enemy speed tells enemies how fast to progress across
    //screen with fluid movement
    this.spd = mathRandomRange(200, 400);
    this.sprite = 'images/enemy-bug.png';
};

var Player = function(x, y) {
  GameEntity.call(this);
  this.x = 101*x;
  this.y = 80*y-20;
  //player flag is used to let update use logic based
  //on whether Object is player or enemy
  //player speed is based on grid movement
  //ex. spd 2 moves two grids instead of 1 whenever key arrow
  //  key is pressed
  this.spd = 1;
  this.sprite = "images/char-boy.png";
};

var mathRandomRange = function(min, max){
  return (max - min)*Math.random() + min;
};

//pseudoclassical inheritance
//subClass will inherit from superClass
//function was copied from Udacity Object-Oriented Javascript Notes
//https://www.udacity.com/course/viewer#!/c-ud015
var inherit = function(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
};

inherit(Player, GameEntity);
inherit(Enemy, GameEntity);
// Draw the enemy or player on the screen, required method for game

GameEntity.prototype.render = function(){
  if(this.sprite !== ""){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

GameEntity.prototype.update = function(){
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
      if(this.x > 503){
        this.x = -98;
        this.spd = mathRandomRange(200, 400);
      }
      else{
        this.x = this.x + this.spd*dt;
      }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.handleInput = function(key){
  if(key === "left" && this.x > 0){
  this.x = this.x - 101*this.spd;
  }
  else if(key === "right" && this.x < 4*101){
  this.x = this.x + 101*this.spd;
  }
  else if(key === "up" && this.y > 0){
  this.y = this.y - 80*this.spd;
  }
  else if(key === "down" && this.y < 80*4){
  this.y = this.y + 80*this.spd;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for(var i = 1; i < 4 ; i++){
  allEnemies.push(new Enemy(26, i));
}

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
