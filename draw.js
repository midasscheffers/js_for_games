var begin_x = 60;
var begin_y = 60;
var xSize = innerWidth - 20;
var ySize = innerHeight - 20;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 15;
var speed_force = 50;
var ball_radius = 5;
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
    bal = new Bal(21, 21, ball_radius + Math.floor(Math.random() * 25), Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,[Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
    ballen.push(bal);
  }
}

function draw(){
  console.log(frameRate())
  //background(cheeta_bg);
  background(255,255,255,speed_force)
  noStroke();
  fill(255);
  ellipse(((innerWidth)/innerWidth*430),200,150);
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

function player(x, y, player_c, player_s, player_x_speed, player_y_speed){
  this.player_x = x;
  this.player_y = y;
  this.player_c = player_color;

  this.drawplayer = function(){
    ellipse(this.player_x,this.player_y,)
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
    //stroke(0);
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
