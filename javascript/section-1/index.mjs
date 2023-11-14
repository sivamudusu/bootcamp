import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = chalk.yellow;

rl.question("your captain name\n", (string) => {
  console.log(userInput(`Hiii captain ${string} welcome`));
});
