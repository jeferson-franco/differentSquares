function solution(matrix) {
    let squares = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            squares.push(matrix[i][j] + '' + matrix[i][j + 1] + '' + matrix[i + 1][j] + '' + matrix[i + 1][j + 1]);
        }
    }
    return squares.filter((square, index) => squares.indexOf(square) === index).length;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test differentSquares

// alternative solution
