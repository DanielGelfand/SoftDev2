'''
Daniel Gelfand
SoftDev2 pd6
K#22 -- Closure
2019-05-01
'''

def repeat(n):

    def str_create(s):

        return s * n

    return str_create


r1 = repeat(2)
#print( r1("hello") )

r2 = repeat(2)
#print( r2("goodbye") )

#print( repeat("cool")(3) )


def make_counter(accessor = False):
    i = 0

    if not accessor:

        def incr():
            nonlocal i
            i+=1
            return i

        return incr

    else:

        def accessor():
            return i
        return accessor

ctr1 = make_counter()
print( ctr1() )
print( ctr1() )

ctr2 = make_counter()
print( ctr2() )
print( ctr1() )
print( ctr2() )

ctr2 = make_counter(True)
print( ctr2() )

ctr3 = make_counter(True)
#print(ctr3())



