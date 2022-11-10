const board = (num = 8) => {
  const boardSquares = [];

  const _generateSquares = () => {
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        boardSquares.push([i, j]);
      }
    }
    return boardSquares;
  };

  const getBoardSquares = () => boardSquares;

  _generateSquares();
  return { board, getBoardSquares };
};

const chessBoard = board();
console.log(chessBoard);
