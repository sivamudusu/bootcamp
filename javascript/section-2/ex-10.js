let arr = [-1, 2, 3, -5, 4, 9, 10, -8, 15]; //created one Array with positive and negative values
let sum = 0;
for (const num in arr) {
  // adding to sum based on positive condition
  if (arr[num] > 0) {
    sum += arr[num];
  }
}

// we can do the same using map function also

console.log(sum);
