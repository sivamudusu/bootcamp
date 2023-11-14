let str = "hello world"; //original String
let ans = "";
for (i = str.length - 1; i >= 0; i--) {
  ans += str.charAt(i);
}
console.log(ans);
