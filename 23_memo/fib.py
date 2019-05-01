stored = {0:0,1:1}
def fib_old(n):
    

    if n in stored.keys():
        return stored[n]
    else:
        stored[n] =  fib_old(n-1) + fib_old(n-2)

    return stored[n]

#for i in range(0,41):
    #print(fib_old(i))


def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo:
            memo[x] = f(x)
            
        return memo[x]
    return helper

def fib(n):
    if n==0:
        return 0

    elif n==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print( fib(40) )
print( fib(4) )
