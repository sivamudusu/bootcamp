const compose = (f, g) => {
  // a functions that takes two functions and returns a new function
  return (x) => {
    return f(g(x));
  };
};

const f = (x) => {
  return x * x;
};
const g = (x) => {
  return x + x;
};

let sample = compose(f, g);
//here sample holds the function that has been returned by the compose function
let ans = sample(10);
//now sample can perform the both f and g functions in it based on our logic
console.log(ans);
