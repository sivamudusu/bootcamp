class Chessboard {
  constructor() {
    this.board = Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => "-")
    );

    // Place the black pieces on their starting positions
    this.board[0] = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
    this.board[1] = ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"];

    // Place the white pieces on their starting positions
    this.board[7] = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];
    this.board[6] = ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"];
  }
  display() {
    // Convert the board to a string representation
    let boardStr = "";
    for (const row of this.board) {
      boardStr += "| " + row.join(" | ") + " |\n";
    }
    console.log(boardStr);
  }

  movepiece(from, to) {
    if (this.isValidMove(from, to)) {
      const currentPiece = this.board[from[0]][from[1]];
      const targetPiece = this.board[to[0]][to[1]];
      const blackregexp = /[♖♘♗♕♔♙]/gi;
      const whiteregexp = /[♜♞♝♛♚♟︎]/gi;
      const empty = /[-]/gi;

      if (blackregexp.test(currentPiece)) {
        console.log("black Moved");
        if (whiteregexp.test(targetPiece)) {
          this.killPiece(from, to);
        } else if (blackregexp.test(targetPiece)) {
          throw new Error("invalid move");
        } else {
          this.board[to[0]][to[1]] = currentPiece;
          this.board[from[0]][from[1]] = "-";
        }
      } else if (whiteregexp.test(currentPiece)) {
        console.log("white Moved");
        if (blackregexp.test(targetPiece)) {
          this.killPiece(from, to);
        } else if (whiteregexp.test(targetPiece)) {
          throw new Error("invalid move");
        } else {
          this.board[to[0]][to[1]] = currentPiece;
          this.board[from[0]][from[1]] = "-";
        }
      } else {
        throw new Error("please select valid piece");
      }

      this.display();
    } else {
      throw new Error("this is not a valid move");
    }
  }

  isValidMove(from, to) {
    if (
      from[0] < 0 ||
      from[0] >= 8 ||
      from[1] < 0 ||
      from[1] >= 8 ||
      to[0] < 0 ||
      to[1] >= 8 ||
      to[1] < 0 ||
      to[1] >= 8
    ) {
      return false;
    } else {
      return true;
    }
  }
  killPiece(from, to) {
    const currentPiece = this.givePieceData(from);
    const targetPiece = this.givePieceData(to);
    this.board[from[0]][from[1]] = "-";
    this.board[to[0]][to[1]] = currentPiece;

    console.log(`${currentPiece} : Killed=> ${targetPiece} `);
  }
  givePieceData(arr) {
    return this.board[arr[0]][arr[1]];
  }
}

const chessboard = new Chessboard();
chessboard.movepiece([6, 0], [4, 0]);
chessboard.movepiece([4, 0], [1, 0]);
chessboard.movepiece([1,1],[6,1]);
