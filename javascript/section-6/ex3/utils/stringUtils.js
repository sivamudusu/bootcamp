const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const countCharacters = (str) => {
  return str.length;
};

module.exports = {reverseString,countCharacters};
