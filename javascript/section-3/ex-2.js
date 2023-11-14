const filterfn = (arr) => {
  // this function filters the array and returns
  return arr.filter(checkEven);
};

const checkEven = (n) => n % 2 == 0;

const mapfn = (arr) => {
  return arr.map((n) => n * n);
};

const filterAndMap = (arr, filterfn, mapfn) => {
  //this function takes an array and two functions as parameters
  let filtered = filterfn(arr);
  let maped = mapfn(filtered);
  //do some calculations based on above parameters
  return maped;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = filterAndMap(array, filterfn, mapfn);
console.log(ans);
