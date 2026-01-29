class Field {
  constructor(fcolor, coords) {
    this.color = fcolor;
    this.isUncheked = true;
    this.onstayed = ".";
    this.coords = coords;
  };
  staylisten(piece) {
    this.onstayed = piece;
  };
  movelisten() {
    this.onstayed = ".";
  };
};

var row
function fullfillboard(obj) {
    for (let i = 0; i < 8; i++) {
        row = [];
        for (let j = 0; j < 8; j++) {
            row.push(new Field(coords=[i+1, j+1]));
        };
        obj.board.push(row);
    };
};
function setpieces(board) {
  board[0][0].onstayed = "R";
  board[0][1].onstayed = "N";
  board[0][2].onstayed = "B";
  board[0][3].onstayed = "Q";
  board[0][4].onstayed = "K";
  board[0][5].onstayed = "B";
  board[0][6].onstayed = "N";
  board[0][7].onstayed = "R";
  for (let num = 0; num < 8; num++) {
    board[1][num].onstayed = "P";
  };
  for (let nm = 0; nm < 8; nm++) {
    board[6][nm].onstayed = "p";
  };
  board[6][0].onstayed = "r";
  board[0][1].onstayed = "n";
  board[0][2].onstayed = "b";
  board[0][3].onstayed = "q";
  board[0][4].onstayed = "k";
  board[0][5].onstayed = "b";
  board[0][6].onstayed = "n";
  board[0][7].onstayed = "r";
};

function getPieceImageSource(piece) {
    switch (piece) {
        case 'R': return 'assets/black_rook.png';
        case 'N': return 'assets/black_knight.png';
        case 'B': return 'assets/black_bishop.png';
        case 'Q': return 'assets/black_queen.png';
        case 'K': return 'assets/black_king.png';
        case 'P': return 'assets/black_pawn.png';
        case 'r': return 'assets/white_rook.png';
        case 'n': return 'assets/white_knight.png';
        case 'b': return 'assets/white_bishop.png';
        case 'q': return 'assets/white_queen.png';
        case 'k': return 'assets/white_king.png';
        case 'p': return 'assets/white_pawn.png';
    }
}

class Chessboard {
  constructor() {
    this.board = [];
    fullfillboard(this);
    setpieces(this.board);
  };
  setboard(obj) {
    obj.getElementById(`${f.}`)
  };
};
