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


def make_counter(accessor_activated = False):
    counter = 0

    def incr():
        nonlocal counter #edit scope
        counter += 1 #update counter
        return counter

    def accessor():
        return counter

    def func_choice(access=False):
        if not access:
            return incr()
        else:
            return accessor()

    if accessor_activated:
        return func_choice
    return incr

ctr1 = make_counter()
print( ctr1() )
print( ctr1() )

ctr2 = make_counter()
print( ctr2() )
print( ctr1() )
print( ctr2() )

ctr3 = make_counter(True)
ctr3()
ctr3()
print( "ctr3:",ctr3(True) )





