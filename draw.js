var begin_x = 60;
var begin_y = 60;
var xSize = innerWidth - 20;
var ySize = innerHeight - 20;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 10;
var speed_force = 85;
var ball_radius = 25;

function setup(){
  createCanvas(xSize, ySize);

  for (var i = 0; i< aantalBallen; i++){
    bal = new Bal(21 + i, 21, ball_radius, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
    ballen.push(bal);
  }
}

function draw(){
  background(255, 255, 255, speed_force);

  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i];
    bal.teken();
    bal.beweeg();
  }
}

function Bal(x, y, radius, xspd, yspd){
  this.xPos = x + begin_x;
  this.yPos = y + begin_y;
  this.radius = radius;
  this.xSpeed = xspd;
  this.ySpeed = yspd;

  this.teken = function(){
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }

  this.beweeg = function(){
    if (this.xPos > width - this.radius || this.xPos < this.radius){
      if (this.xSpeed < 0){
        this.xSpeed -=0.1;
      }
      else{
        this.xSpeed +=0.1;
      }
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.radius || this.yPos < this.radius){
        this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
}
