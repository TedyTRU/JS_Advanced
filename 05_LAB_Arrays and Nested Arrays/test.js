


const board = [
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']
];

const winningConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];


for (let win of winningConditions) {
    if (board[win[0][0]][win[0][1]] != 'false' &&
        board[win[0][0]][win[0][1]] === board[win[1][0]][win[1][1]] &&
        board[win[0][0]][win[0][1]] === board[win[2][0]][win[2][1]]) {
            
        console.log(win[0][0], win[0][1]);
    } else {
        console.log(win[0][0], win[0][1]);
    }
}

