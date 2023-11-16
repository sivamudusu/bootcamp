
const memoize = (expensiveOperationFn)=>{

    const cache = {};

    return (...args)=>{
        const cacheKey = JSON.stringify(args);
        if(cache[cacheKey]){
            return cache[cacheKey]
        }

        const result = expensiveOperationFn(...args);
        cache[cacheKey] = result;
        return result;
    }

}

const fib = (n)=>{
    if(n==0|n==1)return n
    return fib(n-1)+fib(n-2);

}

const memoizedFib  = memoize(fib);

const result = memoizedFib(5);
console.log(result);