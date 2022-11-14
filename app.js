const createBoard = (num = 8) => {
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
  return { getBoardSquares };
};

const createKnight = (currentPosition = [0, 0]) => {
  //available moves that the night can make based on the current position on the board.
  let availableMoves = [];
  //generates the available moves that the knight can make based on the current position on the board. current position is an array
  const generateMoves = (position = knight.getCurrentPosition()) => {
    const validPosition = (element) => element < 0 || element > 7;
    if (position.find(validPosition)) {
      return `Not a valid position`;
    } else {
      const x = position[0];
      const y = position[1];
      availableMoves.push([x + 2, y - 1]);
      availableMoves.push([x + 2, y + 1]);
      availableMoves.push([x - 2, y + 1]);
      availableMoves.push([x - 2, y - 1]);
      availableMoves.push([x + 1, y - 2]);
      availableMoves.push([x - 1, y - 2]);
      availableMoves.push([x - 1, y + 2]);
      availableMoves.push([x + 1, y + 2]);
    }
    availableMoves = availableMoves.filter(
      (element) =>
        element[0] > 0 && element[0] < 7 && element[1] > 0 && element[1] < 7
    );
    return availableMoves;
  };

  const getCurrentPosition = () => currentPosition;

  const getAvailableMoves = () => availableMoves;
  return { generateMoves, getCurrentPosition, getAvailableMoves };
};

const chessBoard = createBoard();
const knight = createKnight();
console.log(chessBoard);
console.log(knight);

//given a starting position on the chess board x, y
//generate available moves from that position for the knight chess piece
//x + 2 & y + 1 or x - 2 & y - 1 to find the available moves
//if x < 0 or y < 0 then it is not an available move
//if x > 7 or y > 7 then it is not an available move

//might think of starting point as the root of the tree and then available moves from that starting point as childen in the tree.
//then will be able to compare x to other x values in tree to try and find the shortest path to the square that you would want to move to. or y in this example.
//would stop when starting point = wanted pointed | x,y = x,y;
