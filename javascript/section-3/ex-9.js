const callback = (a,b) => console.log(`calculating ${a} and ${b}`);

  
const calculate = (a, b, callback) => {
    callback(a,b);
    return a + b;
  
};


let ans = calculate(10, 20,callback);
console.log(ans);
