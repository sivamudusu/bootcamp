const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askforAnum = () => {
  rl.question("Enter a number or ('exit' to end) :", (input) => {
    if (input.toLocaleLowerCase() === "exit") {
      rl.close();
    } else {
      const number = parseInt(input);
      if (isNaN(number)) {
        console.log("please enter a valid number");
        askforAnum();
      } else {
        console.log(fib(number));
        askforAnum();
      }
    }
  });
};

const fib = (n) => {
  if ((n == 0) | (n == 1)) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
askforAnum();
