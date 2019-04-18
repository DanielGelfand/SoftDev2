from functools import reduce

def Process(file):
    f = open(file,'r')
    words = [''.join(c for c in word if c.isalpha() or c=="'") for word in f.read().split()] 
    f.close()
    return words

print( Process('text.txt') )

def freqWord(file,word):
   # counter = 0
    return reduce( (lambda w,counter: w if w == word) , Process(file) )


print (freqWord('text.txt',"I"))
