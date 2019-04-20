'''
NotSoBad - Daniel Gelfand and Damian Wasilewicz
SoftDev2 pd6
K#20: Reductio ad Absurdum
2019-04-29
'''

from functools import reduce

def get_words(file):
    '''Returns the words in a list of a given file'''
    f = open(file,'r')
    words = [''.join(c for c in word if c.isalpha() or c=="'") for word in f.read().split()]
    f.close()
    return words

#print( get_words('text.txt') )

def freqWord(file,word):
    '''Calculates the frequency of a given word in a text file'''
   # counter = 0
   words = get_words(file)
   return reduce(lambda x,y: x+1  if word.lower() == y.lower() else x,words,0)

#print (freqWord('text.txt',"body")) #24


def mostCommonWord(file):
    '''Finds the most common word in a text file'''
    words = get_words(file)
    wordCounts = {}
    for word in words:
        if word not in wordCounts.keys():
            wordCounts[word] = freqWord(file,word)
        #print(wordCounts)
    return max(wordCounts,key=wordCounts.get)

#print(mostCommonWord('text.txt')) #The
print (freqWord('text.txt',"The")) #1148


