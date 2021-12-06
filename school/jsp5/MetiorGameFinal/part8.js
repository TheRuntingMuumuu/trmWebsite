/*
 * Description : This is a metior game where you will have to dodge the
 * metiors that are falling. You  will have 3 lives and you will also
 * have 3 boosts to use. Your goal will be to get as high a score as
 * possible.
 *
 * Author (TRM)
 * Date(October 27 2021)
*/

//declare and initialise variable for the score and the number of refreshes - I use this not millis becasue this will pause if the game is paused
let score = 0;
let refreshes = 0;

//declare variable for starting the program
let startGame = false

//declare static variables for the thresholds
const THRESHOLD_2 = 20;
const THRESHOLD_3 = 70;

//declare static variable for the boost time, speed (added onto default speed + modifyer), and amount
const BOOST_TIME = 5;
const DEFAULT_BOOST_SPEED = 3;
const DEFAULT_BOOST_AMOUNT = 3;

//declare static variables for the amount of lives
const DEFAULT_AMOUNT_OF_LIVES = 3;

//declare amd initiate the spaceship speed variable
const DEFAULT_SPEED = 5;
let shipSpeed = DEFAULT_SPEED;

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

//declare variables for the powerup
let powerup = false;
let powerupX = 200;
let powerupY = -200;
let powerupImage

//declare variable chewbacca
let chewbacca;
let chewX = 'q'
let chewY = 'q'

//declare variable for the number of boosts, boost, and boosttime
let boostTime = 0;
let boost = false
let numOfBoosts = DEFAULT_BOOST_AMOUNT;

//declare variable for the ship speed with the boost added
let shipSpeedBoost = 0;

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

  //initialises variable powerupImage
  powerupImage = loadImage("chew.png")
}

function draw() {
  //only go if the start variable is true
  if (startGame)
  {
    //only go if they are NOT dead.
    if (dead == false)
    {
      //creates the canvas and background
      createCanvas(400,400);
      background(65)

      //if the boost is active reduce the time by 1 and make the speed high
      if (boostTime > 0)
      {
        shipSpeed = DEFAULT_BOOST_SPEED + DEFAULT_SPEED + shipSpeedBoost;
        boostTime--

        //creates the spaceship with the boosted skin
        image(spaceshipBoost, xPos, yPos);
      } else {
          shipSpeed = DEFAULT_SPEED + shipSpeedBoost;
          //creates the spaceship
          image(spaceship, xPos, yPos);
      }

      //creates the metiors
      image(metior, metiorX, metiorY)
      image(metior, metior2X, metior2Y)
      image(metior, metior3X, metior3Y)

      //creates the powerup
      image(powerupImage, powerupX, powerupY)

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
        tempMetiorArray = metiorPlace(metior3X, metior3Y, metior3Speed)
        metior3X = tempMetiorArray[0]
        metior3Y = tempMetiorArray[1]
        metior3Speed = tempMetiorArray[2]
      }

      //code for making a powerup appear
      //generate the random number to see if powerup or not
      rngPowerup = Math.floor(Math.random()*180)

      //check if the number is correct or not, and if there is already one going
      if (rngPowerup == 1 && powerup == false)
      {
        //sets the powerup to true and sets its x value
        powerup = true;
        powerupX = Math.random()*380;

      }

      //if the powerup is true move it
      if (powerup)
      {
        //if it is below the bottom, kill it and tp it to the top
        if (powerupY > 420)
        {
          powerupY = -200;
          powerup = false;
        }

        //increases the powerup y value by 7
        powerupY += 7

        //is the ship colliding with powerup
        if (isColliding(xPos,yPos,powerupX,powerupY))
        {
          print("Powerup Collected");
          shipSpeedBoost += 0.5;
          //if they are not at full lives, give them one if the y is above 250
          if (powerupY < 250 && lives < DEFAULT_AMOUNT_OF_LIVES)
          {
            lives++;
          }

          powerup = false;
          powerupY = -200;


        }
      }

      //run the determineSpeedModyfyer method to determine the speed modifyer and assign it to the variable speedModifyer
      speedModifyer = determineSpeedModyfyer(score)

      //determine if the ship is colliding with a metior
      if (isColliding(metiorX, metiorY, xPos, yPos))
      {
        removeLive();
        shipSpeedBoost = 0;
      }
      if (isColliding(metior2X, metior2Y, xPos, yPos))
      {
        removeLive();
        shipSpeedBoost = 0;
      }
      if (isColliding(metior3X, metior3Y, xPos, yPos))
      {
        removeLive();
        shipSpeedBoost = 0;
      }

      //increases the score for every second played, and floor it
      refreshes++
      score = Math.floor((refreshes/60))

      //creates background for text
      strokeWeight(3)
      stroke(110,216,255,100)
      fill(255,255,255,100)
      rect(5,10,95,90, 10)
      strokeWeight(0)

      //creates the text with the score
      fill(0)
      textSize(16);
      text("Score " + score + " 🏆", 10, 30);

      //if a boost is active, change the colour of the text
      if (boostTime > 0)
      {
        fill(110,216,255)
      } else if (numOfBoosts == 0)
      {
        fill(141)
      }

      //create the boost text
      text("Boost " + numOfBoosts + " 🚀", 10, 60);

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

        //make the text if they are low
        fill(255,0,20)

      } else if (lives > DEFAULT_AMOUNT_OF_LIVES) //check if the lives has been manually increased
      {
        //tell them not to cheat and kill them right there
        print("Nice try!!! You cannot cheat.")
        dead = true;
      } else
      {
        //if it is not low or full, make text orange
        fill(191,123,30)
      }

      //creates the text
      text("Lives " + lives + " 💗", 10, 90)
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
  } else
  {
    createCanvas(400,400);
    fill(255)
    textSize(25)
    text("PRESS START TO START", 20, 150)
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
    metiorY = (-60 + -(Math.random()*100));

    //sets a random metior speed
    metiorSpeed = ((Math.random()*3)+speedModifyer)

    //sets it at a random x position
    metiorX = ((Math.random()*360))

    //increases the score, uncomment and comment the other score if you want it to be by number of metiors missed
    //score++;
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

//method to remove one live or make them dead
function removeLive()
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

    //move the ship to the middle
    xPos = 175;
    yPos = 320;

  }
  else
  {
    dead = true;
  }
}

//methods to start and stop the game
function start()
{
  startGame = true;
}
function stop()
{
  startGame = false;
}
