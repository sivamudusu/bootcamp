const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav-menu");

burger.addEventListener("click", (e) => {
  nav.classList.toggle("visible");
  console.log("toggleed");
});

// class Thermostat
//   constructor(temp) {
//     this._temp = temp;
//   }
//   get temp() {
//     return (5 / 9) * (this._temp - 32);
//   }
//   set temp(c) {
//     this._temp = (c * 9.0) / 5 + 32;
//   }
// }

// const thermos = new Thermostat(76);
// console.log(thermos.temp);
// thermos.temp = 26;
// console.log(thermos.temp);

// // let a = [
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ];
// a.sort();
// console.log(a);
// let string = "";
// string += "hii";
// string += "hello";
// console.log(string);

// let str = "hello world iam shiva the robot";
// let arr = str.split(" ");
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   max = Math.max(max, arr[i].length);
// }
// console.log(arr);
// console.log(max);
// let string = "hello iam shiva the robot";
// let ans = titleCase(string);
// console.log(ans);

// function titleCase(str) {
//   let ar = str.split(" ");
//   for (let i = 0; i < ar.length; i++) {
//     ar[i] = normalize(ar[i]);
//   }
//   let ans = ar.join(" ");
//   return ans;
// }
// function normalize(str) {
//   let a = str.substring(0, 1).toUpperCase();
//   let b = str.substring(1, str.length).toLowerCase();

//   let ab = a + b;
//   return ab;
// }
// let arr = [5, 3, 20, 3];
// console.log(arr);
// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);

// let a1 = [4, 5];
// let s2 = [1, 2, 3];

// a1.splice(1, 0, ...s2);
// console.log(a1);
// let arr = ["Alien", "line"];
// let str = arr[0].toLowerCase();
// let check = arr[1].toLowerCase();
// let ans = str.includes(check);
// console.log(ans);
// console.log(str);
// console.log(check);
