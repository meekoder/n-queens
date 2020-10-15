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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
