//declare variables for x and y position of the spaceship
let xPos = 175;
let yPos = 320;

//declare variables for width and height of the ship
let width = 50;
let height = 50;

function draw() {
  //fill(value);
  createCanvas(400,400);
  background(220)
  rect(xPos, yPos, width, height);

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

function keyPressed() {


}
