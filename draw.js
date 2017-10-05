var xCar = 0; //Meest links boven
var yCar = 100; //Meest links boven
var xSize = 500;
var ySize = 500;
var wheelSize = 30;

function setup() {
  createCanvas(xSize, ySize); //Canvas van 200 px bij 200 px
  background(210); //Één cijfer geeft grijswaarden
}

function draw() {
    background(210);
    //auto
    noStroke(); //Geen randen om de auto
    fill(0, 255, 40); //Kies de opvulkleur (rgb)
    rect(xCar, yCar, 110, 20); //Parameters: x, y, breedte, hoogte
    rect(xCar + 10, yCar-32, 70, 50);
    noStroke();
    fill(0, 255, 255);
    rect(xCar + 35, yCar - 27, 40, 30);
    // Wielen
    stroke(0); //Witte randen voor de wielen
    strokeWeight(5); //Iets dikkere randen
    fill(125);
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); //Parameters: x1,y1,x2,y2
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize); //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(0);
     //Zwarte weg
    //'width' is de breedte van je canvas
    xCar += 1;
};
