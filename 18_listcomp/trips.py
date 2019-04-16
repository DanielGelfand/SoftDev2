'''
Daniel Gelfand
SoftDev2 pd6
K#18 -- Getting Clever with List Comprehensions
2019-04-16
'''


def triples(n):

    triples = [ (x,y,z) for x in range(1,n) for y in range(x,n) for z in range(y,n) if x**2 + y**2 == z**2]
    return triples

print( triples(20) )

def quicksort(l):
    if len(l) <= 1:
        return l

    partition = l[len(l)-1]
    left = [x for x in l if x < partition]
    right = [x for x in l if x > partition]

    return quicksort(left) + [partition] + quicksort(right)

print(quicksort([45,7,9,3,57,9]))

