'''
TelepathyGang - Daniel Gelfand and Damian Wasilewicz
SoftDev2 pd6
K#16 -- Do You Even List?
2019-04-12
'''

UP_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOW_CASE = "abcdefghijklmnopqrstuvwxyz"
NUMS = ["1","2","3","4","5","6","7","8","9"] #strings so no conversions needed when looping through password
NON_ALPHA = ". ? ! & # , ; : - _ *"
def meetThreshold(password):
    '''Uses list comprehension to return whether a password meets
       a minimum threshold: it contains a mixture of
       upper- and lowercase letters, and at least one number'''

    # list of 1s with each 1 representing an uppercase letter
    yes_ups = [1 for char in password if UP_CASE.find(char) != -1]
    #print(yes_ups)

    yes_lows = [1 for char in password if LOW_CASE.find(char) != -1]
    #print(yes_lows)

    yes_nums = [1 for char in password if char in NUMS ]
    #print(yes_nums)

    return (len(yes_ups) > 0) and (len(yes_lows) > 0) and (len(yes_nums) > 0)

print( meetThreshold("1hIp23") ) #True
print( meetThreshold("hI") ) #False
print( meetThreshold("Hi5") ) #True
print( meetThreshold("i") ) #False

def strength(password):
    '''Returns 1-10 strength of password if minimum threshold met'''

    # if it doesn't meet threshold
    if  not ( meetThreshold(password) ):
        return "Does not even meet minimum threshold"
    # meets threshold
    else:
        strength = 1 #1 for meeting threshold
        yes_ups = [1 for char in password if UP_CASE.find(char) != -1]
        yes_lows = [1 for char in password if LOW_CASE.find(char) != -1]
        yes_nums = [1 for char in password if char in NUMS ]
        yes_nonalpha = [1 for char in password if NON_ALPHA.find(char) != -1 ]

        if len(password) >= 6:
            strength += 1

        strength += sum(yes_ups)
        strength += sum(yes_lows)
        strength += sum(yes_nums)
        strength += sum(yes_nonalpha)

        if(strength  > 10):
            strength = 10


    return strength



