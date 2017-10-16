var begin_x = 60;
var begin_y = 60;
var xSize = innerWidth - 20;
var ySize = innerHeight - 20;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 15;
var speed_force = 85;
var ball_radius = 25;
var ball_color;
var cheeta_bg;
var player_x;
var player_y;
var player_color;
var player_speed;
var player_size;

function setup(){
  createCanvas(xSize, ySize);
  cheeta_bg = loadImage("leopard.jpg");

  for (var i = 0; i< aantalBallen; i++){
    bal = new Bal(21, 21, ball_radius, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,[Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
    ballen.push(bal);
  }
}

function draw(){
  background(cheeta_bg);
  //background(255,255,255,speed_force)
  noStroke();
  fill(255);
  ellipse(430,200,150);
  ellipse(780,200,150);
  fill(0)
  ellipse(430,200,50);
  ellipse(780,200,50);
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i];
    bal.teken();
    bal.beweeg();
  }
}

function Bal(x, y, radius, xspd, yspd, ball_col){
  this.ball_color = ball_col;
  this.xPos = x + begin_x;
  this.yPos = y + begin_y;
  this.radius = radius;
  this.xSpeed = xspd;
  this.ySpeed = yspd;

  this.teken = function(){
    noStroke();
    fill(ball_col);
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
