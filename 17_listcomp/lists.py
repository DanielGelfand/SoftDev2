'''
NotSoBad - Daniel Gelfand and Damian Wasilewicz
SoftDev2 pd6
K#17 -- PPFTLCW
2019-04-15
'''

#1
'''result = []
for n in range(0,10,2):    result.append( str(n) + str(n) )
#print(result)

result2 = [str(n) + str(n) for n in range(0,10,2)]
#print(result2)'''


#2
'''result=[]
for n in range(0,5):
    result.append(n * 10 + 7)


result2 = [ n * 10 + 7 for n in range(0,5)]

print(result)'''

#3

#result = [0 for n in range(0,4)] + [1] + [2}

#4

composites1 = []

for y in range(2,10):
    for x in range(2*y,101,y):
        composites1.append(x)
#print( sorted(set(composites1)) )


#Used set() to get rid of duplicates and then used sorted() to get ascending order
composites2 = sorted(set([x for y in range(2,10) for x in range(2*y,101,y)]))
#print( composites2 )
#print( 100 in composites)

#5

primes1 = []
for n in range(2,100):
    if n not in composites2:
        primes1.append(n)
#print(primes1)

primes2 = [n for n in range(2,100) if n not in composites2]
#print(primes2)

#6

def divisors(number):
    divisors1 = []
    divisors2 = [d for d in range(1,number+1) if number%d == 0]

    for d in range(1, number+1):
        if number%d == 0:
            divisors1.append(d)
    return (divisors1,divisors2)

print( divisors(20) )

