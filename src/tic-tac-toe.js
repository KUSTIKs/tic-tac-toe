class TicTacToe {
  constructor() {
    this.winner = null;
    this.currentPlayer = 'x';
    this.field = [...Array(3)].map(() => Array(3).fill(null));
    this.matches = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex]) {
      return 'this field is not empty';
    }
    this.field[rowIndex][columnIndex] = this.currentPlayer;
    this.checkForWin();
    if (this.noMoreTurns() && !this.winner) {
      this.winner = null;
    }
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
  }

  checkForWin() {
    const flatten = this.field.flat();
    for (let i = 0; i < this.matches.length; i++) {
      let firstElem = flatten[this.matches[i][0]];
      if (!firstElem) continue;
      if (this.matches[i].every((ind) => flatten[ind] === firstElem)) {
        this.winner = firstElem;
      }
    }
  }

  isFinished() {
    return !!this.winner || this.noMoreTurns();
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.getTurnsCount() === 0;
  }

  isDraw() {
    return this.winner === null && this.isFinished();
  }

  getTurnsCount() {
    return this.field.flat().filter((el) => el === null).length;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
