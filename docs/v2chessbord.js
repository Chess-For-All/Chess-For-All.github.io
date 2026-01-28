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
}

var board
