const operateOnArray = (arr, operationFn) => {
  let ans = arr.map((element) => {
    return operationFn(element);
  });
  return ans;
};

const operationFn = (x) => {
  return x * x;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = operateOnArray(arr, operationFn);
console.log(ans);
