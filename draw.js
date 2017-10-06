var xSize = innerWidth - 20;
var ySize = innerHeight - 20;
var player_x = 100;
var player_y = 100;
var player_size = 50;
var player_speed = 10;
var player_speed_x = player_speed;
var player_speed_y = player_speed + 5;
var speed_force = 100 - player_speed;

function setup() {
  createCanvas(xSize, ySize); //Canvas van 200 px bij 200 px
  background(255); //Één cijfer geeft grijswaarden
}

function draw() {
  speed_force = 100 - player_speed;
  background(255, 255, 255, speed_force);
  noStroke();
  fill(0);
  ellipse(player_x, player_y, player_size, player_size);
  if (player_x > xSize){
    player_speed_x = - player_speed_x;
  }
  else if(player_x < 0){
    player_speed_x = - player_speed_x;
  }
  if (player_y > ySize){
    player_speed_y = - player_speed_y;
  }
  if (player_y < 0){
    player_speed_y = - player_speed_y;
  }

  player_x += player_speed_x;
  player_y += player_speed_y;
};
