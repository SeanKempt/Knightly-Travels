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

const pos = (x = 0, y = 0, dist = 0) => {
  return { x, y, dist };
};

const isValid = (x, y) => {
  if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
    return true;
  } else {
    return false;
  }
};
const createKnight = (position = currentPosition) => {
  const generateMoves = (position = knight.getCurrentPosition()) => {
    let availableMoves = [];
    let x = position.x;
    let y = position.y;
    for (let i = 0; i < 7; i++) {
      let newX = x + row[i];
      let newY = y + col[i];
      if (isValid(newX, newY) === true) availableMoves.push(newX, newY);
    }
    return availableMoves;
  };

  const shortestPath = (dest, current = knight.getCurrentPosition()) => {
    const queue = [];
    const visited = [];
    const path = [];
    queue.push(current);

    while (queue.length > 0) {
      let node = queue.shift();
      let x = node.x;
      let y = node.y;
      let dist = node.dist;
      if (x === dest.x && y === dest.y) {
        console.log(visited);
        return dist;
      }

      if (!visited.find((element) => element === node)) {
        visited.push(node);
        for (let i = 0; i <= 7; i++) {
          let x1 = x + row[i];
          let y1 = y + col[i];
          if (isValid(x1, y1)) {
            path.push(pos(x1, y1, dist + 1));
            queue.push(pos(x1, y1, dist + 1));
          }
        }
      }
    }
  };

  const getCurrentPosition = () => position;

  const getAvailableMoves = () => availableMoves;

  return {
    generateMoves,
    getCurrentPosition,
    getAvailableMoves,
    shortestPath,
  };
};

const destination = pos(5, 5);
const currentPosition = pos(2, 1);
const row = [2, 2, -2, -2, 1, 1, -1, -1];
const col = [-1, 1, 1, -1, 2, -2, 2, -2];
const chessBoard = createBoard();
const knight = createKnight();

//might think of starting point as the root of the tree and then available moves from that starting point as childen in the tree.
//then will be able to compare x to other x values in tree to try and find the shortest path to the square that you would want to move to. or y in this example.
//would stop when starting point = wanted pointed | x,y = x,y;
