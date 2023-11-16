
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

































// const { error } = require("console");

// function makerequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log("making request to" + location);
//     if (location === "google") {
//       resolve("google Says Hii");
//     } else {
//       reject("we can only talk to google");
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("processing response");
//     resolve("extra info:  " + response);
//   });
// }

// makerequest("fb")
//   .then((response) => {
//     console.log("response has recieved");
//     return processRequest(response);
//   })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((error) => {
//     console.log(error);
//   });




// async function doWork(location){
//     const response = await makerequest("google");
//     console.log("response recieved");
//     const process = await processRequest(response);
//     console.log(process);

// }

// doWork();