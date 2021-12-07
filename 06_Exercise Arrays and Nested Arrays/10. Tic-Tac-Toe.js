function solve(moves) {

    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
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

    let player = 'O';
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i].split(' ');
        x = Number(x);
        y = Number(y);

        if (board[x][y] == false) {
            if (player === 'X') {
                player = 'O';
            } else {
                player = 'X';
            }
            board[x][y] = player;

        } else {
            console.log('This place is already taken. Please choose another!');
        }


        let winner = checkForWin();
        if (winner != false) {
            console.log(`Player ${winner} wins!`);
            break;
        }


        let hasFinished = true;
        for (let i = 0; i < 3; i++) {
            let lineFinished = true;
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == false) {
                    lineFinished = false;
                    break;
                }
            }
            if (lineFinished == false) {
                hasFinished = false;
                break;
            }
        }
        if (hasFinished) {
            console.log("The game ended! Nobody wins :(");
            break;
        }

    }

    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join('\t'));
    }

    function checkForWin() {
        for (win of winningConditions) {
            if (board[win[0][0]][win[0][1]] != false &&
                board[win[0][0]][win[0][1]] === board[win[1][0]][win[1][1]] &&
                board[win[0][0]][win[0][1]] === board[win[2][0]][win[2][1]]) {

                return board[win[0][0][win[0][1]]];
            }
        }
        return false;
    }


}
solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
)