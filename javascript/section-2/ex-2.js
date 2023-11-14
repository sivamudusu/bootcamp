let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //taken one original array

let oarr = [],
  earr = [];
array.filter((elem, index) => {
  if (index % 2 == 0) {
    earr.push(elem);
  } else {
    oarr.push(elem);
  }
});
console.log(earr, oarr);
