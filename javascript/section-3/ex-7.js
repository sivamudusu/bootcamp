const nthFibonacci = (n) => {
  if ((n == 1) | (n == 0)) {
    return n;
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

let ans = nthFibonacci(6);
console.log(ans);
