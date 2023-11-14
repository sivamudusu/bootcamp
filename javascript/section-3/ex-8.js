const add = (a) => a + a;
const multiply = (a) => a * a;
const devide = (a) => a / a;

// let array = [add, multiply, devide];

// const composeWithReduce = (array) => {
//   array.reduce((prev, cur) => {
//     return (...args) => prev(cur(...args));
//   });
// };

// const composed = composeWithReduce(array);
// let ans = composed(2, 5);
let array = [add, multiply, devide];

let composeWithReduce = (array) => {
  return (x) => {
    return array.reduce((val, cur) => {
    return cur(val) }, x);
  };
};

let composed = composeWithReduce(array);
console.log(composed(2));
