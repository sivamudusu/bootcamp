// const curry = (additionFn) => {
//   return (a) => {
//     return (b) => {
//       return additioFn(a, b);
//     };
//   };
// };

const curry = (additionFn) => (a) => (b) => additionFn(a, b);

const additionFn = (a, b) => a + b;

let ans = curry(additionFn);
let curried = ans(10);
let final = curried(5);
console.log(final);
