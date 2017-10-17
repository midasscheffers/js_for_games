var begin_x = 30;
var begin_y = 30;
var xSize = innerWidth - 20;
var ySize = innerHeight - 20;
var bal;
var ballen = []; //Array waar de ballen in komen te staan
var aantalBallen = 15;
var speed_force = 50;
var ball_radius = 5;
var ball_color;
var cheeta_bg;
var player_size = 50;
var life = 250;
var stage = 0;

function setup(){
  createCanvas(xSize, ySize);
  noCursor();

  for (var i = 0; i< aantalBallen; i++){
    bal = new Bal(21, 21, ball_radius + Math.floor(Math.random() * 25), Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,[Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]);
    ballen.push(bal);
  }
}

function draw(){
  if(stage == 0){
    background(200);
    fill(170);
    noStroke();
    rect((innerWidth/2)-70, (innerHeight/2)-75, 140, 70);
    textSize(50);
    fill(140);
    text("Start", (innerWidth/2)-55, (innerHeight/2)-25);
    stroke(50);
    ellipse(mouseX,mouseY,10)
  }
  else{
    if(!life <= 0){
      //background(cheeta_bg);
      background(255,255,255,speed_force)
      // print life
      textSize(32);
      fill(255,0,0);
      text("life: " + life, 0, 30);
      fill(50);
      noStroke();
      ellipse(mouseX, mouseY, player_size);
      //ball logic
      for (var i = 0; i < ballen.length; i++){
        bal = ballen[i];
        bal.teken();
        bal.check_hit();
        bal.beweeg();
      }
    }
    else{
      background(255,0,0);
      textSize(50);
      fill(150,0,0);
      noStroke();
      text("You died", (innerWidth/2)-50, (innerHeight/2)-25);
      fill(170)
      stroke(50);
      ellipse(mouseX,mouseY,10);
    }
  }
}

function mouseClicked(){
  if(stage == 0){
    if(mouseX > (innerWidth/2)-70 && mouseX < (innerWidth/2)+70 && mouseY > (innerHeight/2)-75 && mouseY < (innerHeight/2)-5){
      stage += 1;
    }
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

  this.check_hit = function(){
    dx = mouseX - this.xPos;
    dy = mouseY - this.yPos;
    if (Math.sqrt(dx*dx + dy*dy) <= player_size + this.radius){
      life -= 1
    }
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
