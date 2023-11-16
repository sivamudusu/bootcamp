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
  
}


