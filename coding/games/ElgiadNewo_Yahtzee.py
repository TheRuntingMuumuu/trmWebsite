"""
course: ICS3U
filename: OwenDaigle_Yahtzee.py
date: January 13 2019
name: Elgiad Newo
description: This program is the dice game Yahtzee for the computer. It is navigated by a CLI. It is my summative for my ICS3U grade 11 computer science course.
"""

def clearScreen():
    """This will work most of the time. Tries three times to clear the screen."""
    print(chr(27)+'[2j') #first attempt at clearing the screen w/ ansi escape codes
    print('\033c')#second attempt at clearing the screen w/ ansi escape codes
    print('\x1bc')#third attempt at clearing the screen w/ ansi escape codes

def standTextOut(string, printMechanismDash=print, printMechanismString=print):
    """
    Borrowed from TheTechRobo's calculator.
    """
    width = os.get_terminal_size().columns
    dashes = "-" * width
    printMechanismDash(dashes)
    printMechanismString(string.center(width))
    printMechanismDash(dashes)

import random #allows me to use the random module so that I can get a random value for the dice rolls
import os #allows me to use the os module so that I can clear the window by using commands that are built in to windows, such as cls (may not be needed anymore)
print(standTextOut("YAHTZEE"))
print('Welcome to the game Yahtzee.')
if input('Do you want to view the rules? Y/n : ').lower()[0] == 'y': #will convert the input to lowercase and then look at the first letter
    print('\n\tYAHTZEE is a dice game.\n\n You roll 5 dice, and you try to get a combination that will get you the highest number of points in one of thirteen categories. You need to fill each category once each round, and there are 13 rounds. If you don’t like the combination that you got on your roll, you can reroll either all, or some of the dice for a total of three rolls. Then, you must accept what you have. There are 2 groups of categories. Upper, and Lower. If you score more than 63 points in the upper category, you get a 35-point bonus. The categories are:  \n\n\tNumbers (1 through 6) [upper] \n\t\tYou will add the number of \'x\'s into the score of that number \n\t3 and 4 of a kind [lower] \n\t\tSum of all of the faces (55568 = 29pts) \n\tStrait [lower] \n\t\tSmall (4 in a row, 1234, 3456, 2345) 30pts \n\t\tLarge (12345, 23456) 40pts \n\tFull house (ex. 11122 OR 22255 OR 99966) [lower] 25pts \n\tYahtzee (55555 OR 11111 OR 22222 OR 33333 OR 44444 OR 66666) [lower] 50pts for the first, 100 for thesecond, third, fourth etc. if applicable \n\tChance (ANYTHING) [lower] Sum up the total (24868 = 28) \n You can only score once per category.\n\n') #these are just the rules to the game with formatting
    input('Press \'ENTER\' to continue...')

clearScreen()

def theGame():
    cheat = False #this variable is saying that at this moment the user has not cheated. It will be changed to false if the user cheats
    cat1 = 'UNUSED' #these lines will just define some variables so that the program and the user knows that these categories have not been used
    cat2 = 'UNUSED'
    cat3 = 'UNUSED'
    cat4 = 'UNUSED'
    cat5 = 'UNUSED'
    cat6 = 'UNUSED'
    catChance = 'UNUSED'
    catYahtzee = 'UNUSED'
    cat3Kind = 'UNUSED'
    cat4Kind = 'UNUSED'
    catSmallStrait = 'UNUSED'
    catLargeStrait = 'UNUSED'
    catFullHouse = 'UNUSED'
    for i in range(0,13): #this will make it excecute a total of 13 times
        print(standTextOut("YAHTZEE Round "+ str((i + 1)))) #formatting
        input('Press \'ENTER\' to roll the dice...') #this line is useless, except that it is cool and it makes the user think that they are rolling the dice
        dice = [random.randint(1, 6),random.randint(1, 6),random.randint(1, 6),random.randint(1, 6),random.randint(1, 6)] #this will assign random values for all of the dice
        print('You rolled: ', dice)
        for j in range(0,2): #this allows the user to reroll the dice twice instead of just once
            if input('Do you want to reroll any of the dice? (Y/n) : ').lower()[0] == 'y': #asks the user whether or not they want to reroll one or many of the dice
                dice2Rerollinput = str(input('Which dice do you want to reroll ? : ')) #asks them which ones they want to reroll if they had responded yes to the line above
                dice2RerollActual = dice2Rerollinput.split() #this will take the user input of which dice they wanted to reroll and turn it into a list
                if dice2RerollActual[0] != '1' and dice2RerollActual[0] != '2' and dice2RerollActual[0] != '3' and dice2RerollActual[0] != '4' and dice2RerollActual[0] != '5': #simple way of detecting if the user accidentally entered a letter. Sadly it only works on the first character.
                    print('\n\tYou did not enter an integer.')
                    input('Press \'ENTER\' to continue...')
                    break
                for l in range(0, len(dice2RerollActual)): #these lines will change the list created on the previous line into integers.
                    dice2RerollActual[l] = int(dice2RerollActual[l])
                    dice2RerollActual[l] -= 1 #removes 1 from the lists so that the program will interpert the users input correctly since the program thinks of the dice as 0 1 2 3 4, but humans prefer thinking of it as 1 2 3 4 5.
                for k in range(0, len(dice2RerollActual)): #will activate for the number of dice the user wants to reroll
                    dice[dice2RerollActual[k]] = random.randint(1, 6) #this rerolls the dice
            print('This is what you ended up with', dice)
        print('This is the list of the categories : \n\t1 : ', cat1, '\n\t2 : ', cat2,'\n\t3 : ', cat3,'\n\t4 : ', cat4,'\n\t5 : ', cat5,'\n\t6 : ', cat6,'\n\t3 of a kind : ', cat3Kind,'\n\t4 of a kind : ', cat4Kind, '\n\tfull house : ', catFullHouse,'\n\tsmall strait : ', catSmallStrait,'\n\tlarge strait : ', catLargeStrait,'\n\tchance : ', catChance,'\n\tyahtzee : ', catYahtzee)
        userInputForCat = input('Which category do you want to fill ? : ')
        userInputForCat = userInputForCat.lower().strip() #.lower() will make it lowercase; .strip() will strip any leading and trailing spaces. May reduce crashing.
        if userInputForCat == '1': #all of these if and elif statements will determine which category the user wants to fill based on their input.
            if cat1 != 'UNUSED': #this will only activate if the user has already chosen the category, and then it will terminate the game if it activates since the user will have cheated.
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True #sets the cheat variable to true so that the score calculating code does not run and give the user an error code.
                break
            cat1 = (dice.count(1)) * 1 #this assigns the correct value to the 1s category.
        elif userInputForCat == '2':
            if cat2 != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            cat2 = (dice.count(2)) * 2
        elif userInputForCat == '3':
            if cat3 != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            cat3 = (dice.count(3)) * 3
        elif userInputForCat == '4':
            if cat4 != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            cat4 = (dice.count(4)) * 4
        elif userInputForCat == '5':
            if cat5 != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            cat5 = (dice.count(5)) * 5
        elif userInputForCat == '6':
            if cat6 != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            cat6 = (dice.count(6)) * 6
        elif userInputForCat == 'chance':
            if catChance != 'UNUSED':
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            catChance = sum(dice) #calculates the sum of all dice
        elif userInputForCat == 'yahtzee':
            if catYahtzee == 0: #
                print('\n\tYou have cheated. You have chosen the same category twice. In the future, please do not do that.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            elif dice[0] != dice[1] or dice[1] != dice[2] or dice[2] != dice[3] or dice[3] != dice[4]: #determines whether the user actually scored a yahtzee
                catYahtzee = 0 #assigns a zero if the user did not score a yahtzee
            elif catYahtzee == 'UNUSED':
                cheat = True
                catYahtzee = 50
            else:
                catYahtzee += 100
        elif userInputForCat == '3 of a kind':
            if dice.count(int(input('What digit did you get 3 of a kind of : '))) >= 3: #asks the user for what dice they rolled 3 of a king and sees if there are actually 3 of a kind
                cat3Kind = sum(dice)
            elif cat4Kind == 0:
                print('You cheated. You scored the same category twice. In the future, please do not do that again.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            else:
                cat3Kind = 0
        elif userInputForCat == '4 of a kind':
            if dice.count(int(input('What digit did you get 4 of a kind of : '))) >= 4:
                cat4Kind = sum(dice)
            elif cat4Kind == 0:
                print('You cheated. You scored the same category twice. In the future, please do not do that again.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            else:
                cat4Kind = 0
        elif userInputForCat == 'full house':
            if catFullHouse != 'UNUSED':
                print('You cheated. You scored the same category twice. In the future, please do not do that again.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            elif dice.count(int(input('What was the digit that you got three of : '))) == 3 and dice.count(int(input('What was the digit that you got two of : '))) == 2: #determines if the user actually got a full house
                catFullHouse = 25 #assigns 25 points to the full house catefory
            else:
                catFullHouse = 0 #assigns a zero to the full house category if there was not a full house scored.
        elif userInputForCat == 'small strait':
            if catSmallStrait != 'UNUSED':
                print('You cheated. You scored the same category twice. In the future, please do not do that again.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            elif 1 in dice and 2 in dice and 3 in dice and 4 in dice: #determines if they rolled a 1 2 3 and 4 so that it is a small strait
                catSmallStrait = 30
            elif 2 in dice and 3 in dice and 4 in dice and 5 in dice: #determines if they rolled a 2 3 4 and 5so that it is a small strait
                catSmallStrait = 30
            elif 3 in dice and 4 in dice and 5 in dice and 6 in dice: #determines if they rolled a 3 4 5 and 6 so that it is a small strait
                catSmallStrait = 30
            else:
                catSmallStrait = 0
        elif userInputForCat == 'large strait':
            if catLargeStrait != 'UNUSED':
                print('You cheated. You scored the same category twice. In the future, please do not do that again.')
                input('Press \'ENTER\' to continue...')
                cheat = True
                break
            elif 1 in dice and 2 in dice and 3 in dice and 4 in dice and 5 in dice: #determines if they rolled a 1 2 3 4 and 5 so that it is a large strait
                catLargeStrait = 40
            elif 2 in dice and 3 in dice and 4 in dice and 5 in dice and 6 in dice: #determines if they rolled a 2 3 4 5 and 6 so that it is a large strait
                catLargeStrait = 40
            else:
                catLargeStrait = 0
        else:
            print('You did not enter a valid entry.')
            cheat = True
            input('Press \'ENTER\' to continue...')
            break
        input('Press \'ENTER\' to continue.')
        clearScreen()
    clearScreen()
    print('\n--------------YAHTZEE final score---------\n')
    print('This is your final list of categories : \n\n\t1 : ', cat1, '\n\t2 : ', cat2,'\n\t3 : ', cat3,'\n\t4 : ', cat4,'\n\t5 : ', cat5,'\n\t6 : ', cat6,'\n\t3 of a kind : ', cat3Kind,'\n\t4 of a kind : ', cat4Kind,'\n\tfull house : ', catFullHouse,'\n\tsmall strait : ', catSmallStrait,'\n\tlarge strait : ', catLargeStrait,'\n\tchance : ', catChance,'\n\tyahtzee : ', catYahtzee) #prints the final values for all of the categories
    bonus = 0 #defines the variable so it has a value if the total of the upper section is less than 65
    if cheat == False: #calculates only if the user has not cheated, because if they have cheated, they probably will not have filled all of the categories so some will still be unused, so the program will try to add them and wil lfail since they are not integers. So this line avoids all that if the user cheats.
        if cat1 + cat2 + cat3 + cat4 + cat5 + cat6 >= 63: #this determines whether or not to add the 35 point bonus to the final score
            bonus = 35
        finalScore = cat1+cat2+cat3+cat4+cat5+cat6+cat3Kind+cat4Kind+catChance+catYahtzee+bonus #this determines the final score
        print('\nYour final score is : ', finalScore) #this prints thje final score
    else:
        print('\nYou cheated at some point during the game, so the score cannot be calculated since you did not finish the game.')
    return(standTextOut('\n\tThank you for playing\n')) #I use return instead of print since if I use print, it will also output NONE since this is the last line in the function.
print(theGame())#this activates the function which is most of the game and prints a thanks to the user
