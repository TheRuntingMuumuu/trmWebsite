//declare variables for x and y position of the spaceship
let xPos = 175;
let yPos = 320;

//declare variables for width and height of the ship
let width = 30;
let height = 30;

//declare and do not initialise the spaceship image variable
let spaceship;

function preload() {
  //initialise the variable spaceship with the spaceship image
  spaceship = loadImage('ship.png');

}

function draw() {
  //creates the canvas and background
  createCanvas(400,400);
  background(220)

  //creates the spaceship
  image(spaceship, xPos, yPos);


  //if statement to move the ship depending on what key is pressed
  if (keyIsDown(65)) {
      if (xPos <= 0);
      else
      {
        xPos -= 5;
      }
  }
  if (keyIsDown(68))
    if (xPos >= (400-width));
    else
    {
      xPos += 5;
    }
  if (keyIsDown(87))
    if (yPos <= 0);
    else
    {
      yPos -= 5;
    }
  if (keyIsDown(83))
  {
    if (yPos >= (400-height));
    else
    {
      yPos += 5;
    }
  }

}
