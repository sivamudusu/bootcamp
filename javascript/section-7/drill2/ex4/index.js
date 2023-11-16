const chess = require("./chess");
const yaml = require("yaml");
const fs = require("fs");

const board = new chess.Chessboard();

// const yamlString = yaml.stringify(board);
function saveToYaml(filename) {
  const data = yaml.dump(board);
  fs.writeFileSync(filename, data);
}

function loadChessboard(filename) {
  const board = yaml.load(filename);
  fs.readFileSync(filename, "utf-8");
}

module.exports = {
  saveToYaml,
  loadChessboard,
};

// const yamlString2 = fs.readFileSync("board.yaml", "utf8");

// const loadedChessboard = yaml.parse(yamlString2);
// loadedChessboard.display();
