stored = {0:0,1:1}
def fib_old(n):
    

    if n in stored.keys():
        return stored[n]
    else:
        stored[n] =  fib_old(n-1) + fib_old(n-2)

    return stored[n]

for i in range(0,1000):
    print(fib_old(i))


def memoize(f):
    memo = {}
    def helper(x):
        #stuff
        return
    return helper

def fib(n):
    #stuff
    return

fib = memoize(fib)
print(fib(40))
