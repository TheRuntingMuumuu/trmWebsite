/*
 * Description : This is a metior game where you will have to dodge the
 * metiors that are falling. You  will have 3 lives and you will also
 * have 3 boosts to use. Your goal will be to get as high a score as
 * possible.
 *
 * Author (TRM)
 * Date(October 27 2021)
*/

//declare and initialise variable for the score
let score = 0;

//declare static variables for the thresholds
const THRESHOLD_2 = 20;
const THRESHOLD_3 = 70;

//declare static variable for the boost time, speed, and amount
const BOOST_TIME = 5;
const DEFAULT_BOOST_SPEED = 8;
const DEFAULT_BOOST_AMOUNT = 3;

//declare static variables for the amount of lives
const DEFAULT_AMOUNT_OF_LIVES = 8;

//declare amd initiate the spaceship speed variable
const DEFAULT_SPEED = 5;

//declare variable for the lives
let lives = DEFAULT_AMOUNT_OF_LIVES;

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

//define array to be used to temporarily take multiple outputs from a method
let tempMetiorArray = []

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

//declare variable chewbacca
let chewbacca;
let chewX = 'q'
let chewY = 'q'

//declare variable for the number of boosts, boost, and boosttime
let boostTime = 0;
let boost = false
let numOfBoosts = DEFAULT_BOOST_AMOUNT;

//preloads these images
function preload() {
  //initialise the variable spaceship, deadship, and spaceship boosted with the spaceship image
  spaceship = loadImage('ship.png');
  spaceshipBoost = loadImage('shipboost.png');
  deadShip = loadImage("dead.png")

  //initialises the variable metior with the metior image
  metior = loadImage('Metior.png')

  //initialises variable chewbacca with the image
  chewbacca = loadImage('chew.png')

}

function draw() {
  if (dead == false)
  {
    //creates the canvas and background
    createCanvas(400,400);
    background(100)

    //if the boost is active reduce the time by 1 and make the speed high
    if (boostTime > 0)
    {
      shipSpeed = DEFAULT_BOOST_SPEED;
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

    //calls the metiorPlace method to determine if the metior is off canvas and if so wrap around
    tempMetiorArray = metiorPlace(metiorX, metiorY, metiorSpeed)
    metiorX = tempMetiorArray[0]
    metiorY = tempMetiorArray[1]
    metiorSpeed = tempMetiorArray[2]

    //if statement to only move this metior if the score is high
    if (score > THRESHOLD_2)
    {
      tempMetiorArray = metiorPlace(metior2X, metior2Y, metior2Speed)
      metior2X = tempMetiorArray[0]
      metior2Y = tempMetiorArray[1]
      metior2Speed = tempMetiorArray[2]
    }

    //if statement to only move this metior if the score is high
    if (score > THRESHOLD_3)
    {
      tempMetiorArray = metiorPlace(metior2X, metior2Y, metior2Speed)
      metior2X = tempMetiorArray[0]
      metior2Y = tempMetiorArray[1]
      metior2Speed = tempMetiorArray[2]
    }

    //run the determineSpeedModyfyer method to determine the speed modifyer and assign it to the variable speedModifyer
    speedModifyer = determineSpeedModyfyer(score)

    //determine if the ship is colliding with a metior
    if (isColliding(metiorX, metiorY, xPos, yPos))
    {
      //check if they have lives left
      if (lives > 1)
      {
        //reduce the lives by 1
        lives--

        //move the metiors to way above the top
        metiorY = -500

        if (score > THRESHOLD_2)
        {
            metior2Y = -1000
        }
        if (score > THRESHOLD_3)
        {
          metior3Y = -1500
        }

      }
      else
      {
        dead = true;
      }
    }

    //creates background for text
    strokeWeight(0)
    fill(255,255,255,100)
    rect(5,10,80,90, 10)

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

    //create the boost text
    text("Boost " + numOfBoosts, 10, 60);

    //create the lives text with a different colour depending on how many lives
    if (lives == DEFAULT_AMOUNT_OF_LIVES)
    {
      fill(128,200,128)

    } else if (lives <= (DEFAULT_AMOUNT_OF_LIVES/3) && lives <= 2)
    {
      //create red border if lives are 1
      if (lives == 1)
      {
        strokeWeight(12)
        stroke(255,0,0,120)
        fill(0,0,0,0)
        rect(0,0,400,400)
        strokeWeight(0)
        stroke(0)
      }

      fill(255,0,20)

    } else
    {
      fill(191,123,30)
    }

    //creates the text
    text("Lives " + lives, 10, 90)
  }

  //what to do if the ship dies
  if (dead == true)
  {
    background(80)
    fill(255)

    image(deadShip, xPos, yPos);
    //if this is the first time this is run
    if (chewX == 'q')
    {
      chewX = xPos
      chewY = yPos
    }
    chewX += 1
    chewY += 1
    image(chewbacca, chewX, chewY)
    textSize(38)
    text("Game Over", 100, 150)
    textSize(14)
    text("You got a score of " + score, 125, 220)
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

//method to determine the speed modifyer
function determineSpeedModyfyer(score)
{
  //declare variable for the speedModifyer
  let speedModifyer;

  //if statement to change the speed depending on the score
  if (score < 6)
  {
    speedModifyer = 2;
  } else if (score < 12)
  {
    speedModifyer = 3;
  } else if (score < 30)
  {
    speedModifyer = 4;
  } else if (score < 40)
  {
    speedModifyer = 5;
  } else if (score < 90)
  {
    speedModifyer = 6
  } else if (score < 110)
  {
    speedModifyer = 8;
  } else
  {
    speedModifyer = 10;
  }

  //return the modifyer to where the method was called
  return speedModifyer;
}

function metiorPlace(metiorX, metiorY, metiorSpeed)
{
  //make metiorArray
  let metiorArray = []

  if (metiorY >= 420)
  {
    //sets it to the top
    metiorY = -60;

    //sets a random metior speed
    metiorSpeed = ((Math.random()*3)+speedModifyer)

    //sets it at a random x position
    metiorX = ((Math.random()*360))

    //increases the score
    score++;
  }
  else
  {
    //move the metior
    metiorY += metiorSpeed;

  }

  //create array with the metior information
  metiorArray[0] = metiorX
  metiorArray[1] = metiorY
  metiorArray[2] = metiorSpeed

  //return the y value of the metior to where the method was called
  return metiorArray;
}


//method to determine if the metior is touching the player
function isColliding(metiorX, metiorY, shipX, shipY)
{
  //declare variable to return (boolean)
  let booIsColliding;

  //declare variable for distance between them
  let distance;

  //use the dist method to determine how fare it is
  distance = dist(metiorX, metiorY, shipX, shipY);

  //if statement to determine whether the ship is touching the metior
  if (distance <= 30)
  {
    booIsColliding = true;
  }
  else {
    booIsColliding = false;
  }

  //returns boolean if the user is colliding with the metior or not
  return booIsColliding;
}
