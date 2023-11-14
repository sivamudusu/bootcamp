const multiplyBy = (x) => {
  return (y) => x * y;
};

const returnedFunction = multiplyBy(10);
let ans = returnedFunction(5);
console.log(ans);
