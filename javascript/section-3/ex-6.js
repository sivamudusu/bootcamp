const sortNumbers = (arr, compareFn) => {
  let ans = arr.sort(compareFn);
  return ans;
};

const compareFn = (x, y) => x - y;

let arr = [10, 5, 11, 25, 9, 7, 3, 45, 1];
let ans = sortNumbers(arr, compareFn);
console.log(ans);
