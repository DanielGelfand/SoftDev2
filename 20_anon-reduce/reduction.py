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
    words = [''.join(c for c in word if c.isalpha() or c=="'") for word in f.read().lower().strip(',.?!;:').split()]
    f.close()
    return words

#print( get_words('text.txt') )
def freqWord(file,word):
    words = get_words(file)
    return reduce(lambda x,y: x+1 if word.lower() == y.lower() else x,words,0)
    # '''Calculates the frequency of a given word in a text file'''

#print (freqWord('text.txt',"body")) #24
def strip (text):
    return [x.strip(".?!:;,").lower() for x in text]

def freqWords(file, wordlist):
    words = get_words(file)
    wordlist = strip(wordlist)
    length = len(wordlist)
    slists = ([words[index : index + length] for index in range(len(words) - length + 1)])
    counter = [1 for x in slists if x == wordlist]
    if not len(counter):
        return 0
    return reduce((lambda x,y: x + y), counter)

def mostCommonWord(file):
    '''Finds the most common word in a text file'''
    words = get_words(file)
    setty = set(words)
    frq = [{words.count(x): x} for x in setty]
    val = [list(x.keys())[0] for x in frq]
    m = max(val)
    for i in frq:
        if m in i:
            return i[m]

print(mostCommonWord('text.txt')) #the
print(freqWord('text.txt', "The")) #1148
print( freqWords('text.txt', ["Gregor", "Samsa"])) #1
print( freqWords('text.txt', ["The"])) # 1148
print( freqWords('text.txt', ["he", "thought"])) #9
