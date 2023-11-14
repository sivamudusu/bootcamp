let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // originalarray

let odd = [];
Array.filter((element) => {
  // filtering array with only odd elements
  if (element % 2 !== 0) {
    odd.push(element);
  }
});
console.log(odd);
