# This code will be automatically
# translated into ES6 javascript
# with https://github.com/metapensiero/metapensiero.pj.

# A lot of this is not the complete
# code, it is just me being lazy. :P
def CalculResults(drill,secam):
    if drill == "3plus" or drill == "3": 
        currentGrade = 6
    elif drill == "2":
        currentGrade = 5
    elif drill == "1":
        currentGrade = 3
    elif drill == "0":
        currentGrade = 1
    else:
        #document.write("Something's wrong...")
        return False
    drill = secam #ugly hack so I can copy paste
    drillGrade = int(currentGrade)
    if drill == "3plus" or drill == "3":
        currentGrade = 6
    elif drill == "2":
        currentGrade = 5
    elif drill == "1":
        currentGrade = 3
    elif drill == "0":
        currentGrade = 1
    else:
        #document.write("Something's wrong...")
        return False
    secamGrade = int(currentGrade)
    print("DRILL:%s:SECAM:%s"%(drillGrade,secamGrade))
    roundedGrade = int(round(( (secamGrade + drillGrade) / 2)))
    if roundedGrade == 1:
        return "F"
    elif roundedGrade == 2:
        return "D"
    elif roundedGrade == 3:
        return "C"
    elif roundedGrade == 4:
        return "B"
    elif roundedGrade == 5:
        return "A"
    elif roundedGrade == 6:
        return "A+"
    else:
        #document.write("Something's wrong...") //will be uncommented
        return False

CalculResults(drill,secam) #not in the final code, but im not 100% sure how to do it otyherwise so this will tell me :P
