/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let boardObj = new Board({n: n});
  let board = boardObj.rows();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] = 1;
      let rowConflict = boardObj.hasAnyRowConflicts();
      let colConflict = boardObj.hasAnyColConflicts();
      if (rowConflict || colConflict) {
        board[i][j] = 0;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  let board = new Board({n: n});

  let boardTree = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        boardTree(row + 1);
      }

      board.togglePiece(row, i);
    }

  };
  boardTree(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;






















  // console.log(n);
  // const boardObj = new Board({n: n});
  // let board = boardObj.rows();
  // var listOfTrees = new Set();
  // var solutionCount = listOfTrees.size;
  // var listOfSpaces = {};

  // var columns = new Set();
  // for (let i = 0; i < n; i++) {
  //   columns.add(i);
  // }

  // for (let i = 0; i < n; i++) {
  //   listOfSpaces[i] = columns;
  // }
  // //tree func with default param (empty tree or parent tree, indexes = 0, or parent indexes)
  // const Tree = (board, listOfSpaces) => {
  //   console.log(board);
  //   console.warn(listOfTrees);
  //   for (let row in listOfSpaces) {
  //     console.log(listOfSpaces, listOfSpaces[row]);
  //     for (let column of listOfSpaces[row]) {
  //       board[row][column] = 1;
  //       delete listOfSpaces[row];

  //       for (let key in listOfSpaces) {
  //         if (listOfSpaces[key].has(column)) {
  //           listOfSpaces[key].delete(column);
  //         }
  //       }

  //       if (Object.keys(listOfSpaces).length === 0) {
  //         let strBoard = JSON.stringify(board);
  //         listOfTrees.add(strBoard);
  //       } else {
  //         Tree(board, listOfSpaces);
  //       }
  //     }
  //   }
  // };

  // Tree(board, listOfSpaces);
  // //iterate through each space to put first piece
  // //create tree obj => new board
  // //recurse tree with parent tree and indexes
  // console.log('Number of solutions for ' + n + ' rooks:', listOfTrees.size);
  // return listOfTrees.size;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // let boardObj = new Board({n: n});
  // let board = boardObj.rows();

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board.length; j++) {
  //     board[i][j] = 1;
  //     let rowConflict = boardObj.hasAnyRowConflicts();
  //     let colConflict = boardObj.hasAnyColConflicts();
  //     let majorConflict = boardObj.hasAnyMajorDiagonalConflicts();
  //     let minorConflict = boardObj.hasAnyMinorDiagonalConflicts();
  //     if (rowConflict || colConflict || majorConflict || minorConflict) {
  //       board[i][j] = 0;
  //     }
  //   }
  // }
  // console.log(board);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  // return board;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0; //fixme
  const board = new Board({ n: n });
  const boardTree = (row) => {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        boardTree(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  boardTree(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};