//declare and initialise variable for the score
let score = 0;

//declare static variables for the thresholds
const THRESHOLD_2 = 20;
const THRESHOLD_3 = 70;

//declare static variable for the boost time, speed, and amount
const BOOST_TIME = 5;
const BOOST_SPEED = 8;
const BOOST_AMOUNT = 3;

//declare and initialise variable if they die
let dead = false;

//declare variables for x and y position of the spaceship
let xPos = 175;
let yPos = 320;

//declare variables for width and height of the ship
let width = 30;
let height = 30;

//declare and do not initialise the spaceship, deadship, and spaceshipBoost image variable
let spaceship;
let spaceshipBoost;
let deadShip;

//declare amd initiate the spaceship speed variable
const DEFAULT_SPEED = 5;

//variables for the first metior
  //declare and initialise the metior variables for the x position, y position, and the speed of the metior
  let metiorX = 200;
  let metiorY = -900;
  let metiorSpeed = 4;

  //declare the variable for the metior image
  let metior;

//variables for the second metior
  //declare and initialise the metior variables for the x position, y position, and the speed of the metior
  let metior2X = 200;
  let metior2Y = -200;
  let metior2Speed = 4;

  //declare the variable for the metior image
  let metior2;

//variables for the third metior
  //declare and initialise the metior variables for the x position, y position, and the speed of the metior
  let metior3X = 200;
  let metior3Y = -200;
  let metior3Speed = 4;

  //declare the variable for the metior image
  let metior3;

//declare variable for the number of boosts, boost, and boosttime
boostTime = 0;
boost = false
numOfBoosts = 3;

//preloads these images
function preload() {
  //initialise the variable spaceship, deadship, and spaceship boosted with the spaceship image
  spaceship = loadImage('ship.png');
  spaceshipBoost = loadImage('shipboost.png');
  deadShip = loadImage("dead.png")

  //initialises the variable metior with the metior image
  metior = loadImage('Metior.png')

}

function draw() {
  //creates the canvas and background
  createCanvas(400,400);
  background(100)

  //if the boost is active reduce the time by 1 and make the speed high
  if (boostTime > 0)
  {
    shipSpeed = BOOST_SPEED;
    boostTime--

    //creates the spaceship with the boosted skin
    image(spaceshipBoost, xPos, yPos);
  } else {
      shipSpeed = DEFAULT_SPEED;
      //creates the spaceship
      image(spaceship, xPos, yPos);
  }



  //creates the metiors
  image(metior, metiorX, metiorY)
  image(metior, metior2X, metior2Y)
  image(metior, metior3X, metior3Y)


  //if statement to move the ship depending on what key is pressed
  if (keyIsDown(65)) {
      if (xPos <= 0);
      else
      {
        xPos -= shipSpeed;
      }
  }
  if (keyIsDown(68))
    if (xPos >= (400-width));
    else
    {
      xPos += shipSpeed;
    }
  if (keyIsDown(87))
    if (yPos <= 0);
    else
    {
      yPos -= shipSpeed;
    }
  if (keyIsDown(83))
  {
    if (yPos >= (400-height));
    else
    {
      yPos += shipSpeed;
    }
  }

  //if statement to move the metior if it hits the bottom and change its speed
  if (metiorY >= 420)
  {
    //sets it to the top
    metiorY = -60;

    //sets a random metior speed
    metiorSpeed = ((Math.random()*3)+speedModifyer)

    //sets it at a random x position
    metiorX = ((Math.random()*320)+40)

    //increases the score
    score++;
  }
  else
  {
    //move the metior
    metiorY += metiorSpeed;

  }

  //if statement to only move this metior if the score is high
  if (score > THRESHOLD_2)
  {
    //if statement to move the metior if it hits the bottom and change its speed
    if (metior2Y >= 420)
    {
      //sets it to the top
      metior2Y = -60;

      //sets a random metior speed
      metior2Speed = ((Math.random()*3)+speedModifyer)

      //sets it at a random x position
      metior2X = ((Math.random()*320)+40)

      //increases the score
      score++;
    }
    else
    {
      //move the metior
      metior2Y += metior2Speed;

    }
  }

  //if statement to only move this metior if the score is high
  if (score > THRESHOLD_3)
  {
    //if statement to move the metior if it hits the bottom and change its speed
    if (metior3Y >= 420)
    {
      //sets it to the top
      metior3Y = -60;

      //sets a random metior speed
      metior3Speed = ((Math.random()*3)+speedModifyer)

      //sets it at a random x position
      metior3X = ((Math.random()*320)+40)

      //increases the score
      score++;
    }
    else
    {
      //move the metior
      metior3Y += metior3Speed;

    }
  }

  //if statement to change the speed depending on the score
  if (score < 6)
  {
    speedModifyer = 2;
  } else if (score < 12)
  {
    speedModifyer = 3;
  } else if (score < 30)
  {
    speedModifyer = 5;
  } else if (score < 40)
  {
    speedModifyer = 6;
  } else if (score < 90)
  {
    speedModifyer = 7
  } else if (score < 110)
  {
    speedModifyer = 8;
  } else
  {
    speedModifyer = 10;
  }

  //creates background for text
  strokeWeight(0)
  fill(255,255,255,100)
  rect(5,10,80,60, 10)

  //creates the text with the score
  fill(0)
  textSize(16);
  text("Score " + score, 10, 30);
  //if a boost is active, change the colour of the text
  if (boostTime > 0)
  {
    fill(110,216,255)
  } else if (numOfBoosts == 0)
  {
    fill(141)
  }
  text("Boost " + numOfBoosts, 10, 60);

  //what to do if the ship dies
  if (dead == true)
  {
    background(80)
    fill(255)
    textSize(38)
    text("Game Over", 100, 150)
    textSize(14)
    text("You got a score of " + score, 125, 220)
    image(deadShip, xPos, yPos);
    noLoop()
  }
}

//activate a boost if the space key is clicked
function keyPressed(){
  if (keyCode == 32)
  {
    //only work if they have boosts to spend and one is not active
    if (numOfBoosts > 0 && boostTime == 0)
    {
      numOfBoosts--;
      //sets the boost time variable to the boostime constant * 60 so it lasts for the right amount of time.
      boostTime = (BOOST_TIME*60);
    }
  }
}
