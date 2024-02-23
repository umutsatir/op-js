const cells = document.querySelectorAll(".cell");
const gameOverDiv = document.querySelector(".gameOver");
const restartButton = document.querySelector("#resButton");

const player = (letter) => {
    const getLetter = () => { return letter; }
    return { letter, getLetter };
};


let player1 = player("X");
let player2 = player("O");

const game = ((player1, player2) => {
    let currPlayer = player1;
    let board = ["", "", "",
                "", "", "",
                "", "", ""];
    let winner;
    let isOver = false;
    getCurrentPlayer = () => { return currPlayer; }
    changePlayer = () => currPlayer = currPlayer === player1 ? player2 : player1;
    setBoard = (index) => board[index] = currPlayer.letter;
    return { winner, getCurrentPlayer, changePlayer, setBoard, board, isOver };
})(player1, player2);


cells.forEach((cell) => {
    cell.addEventListener("mousedown", cellClicked);
});

restartButton.addEventListener("click", function () {
    location.reload();
});

function cellClicked(e) {
    if (e.target.childElementCount === 0 && !game.isOver) {
        const h1 = document.createElement("h1");
        h1.classList.add("bold");
        h1.textContent = game.getCurrentPlayer().letter;
        e.target.appendChild(h1);
        game.setBoard(Array.from(cells).indexOf(e.target));
        game.changePlayer();
        checkGame(game);
    }

    if (game.isOver) {
        if (game.winner !== player1 && game.winner !== player2) {
            gameOverDiv.childNodes[0].textContent = "Game is tie!";
        }
        else {
            gameOverDiv.childNodes[0].textContent = "Game is over! Player " + game.winner.letter + " won!";
        }
        gameOverDiv.classList.remove("hidden");
    }
}

function checkGame() {
    // horizontal
    if (game.board[0] === game.board[1] && game.board[1] === game.board[2])
        checkWinner(0);
    if (game.board[3] === game.board[4] && game.board[4] === game.board[5])
        checkWinner(3);
    if (game.board[6] === game.board[7] && game.board[7] === game.board[8])
        checkWinner(6);
    // vertical
    if (game.board[0] === game.board[3] && game.board[3] === game.board[6])
        checkWinner(0);
    if (game.board[1] === game.board[4] && game.board[4] === game.board[7])
        checkWinner(1);
    if (game.board[2] === game.board[5] && game.board[5] === game.board[8])
        checkWinner(2);
    // diagonal
    if (game.board[0] === game.board[4] && game.board[4] === game.board[8])
        checkWinner(0);
    if (game.board[2] === game.board[4] && game.board[4] === game.board[6])
        checkWinner(2);
    if (isBoardFull())
        game.isOver = true;
}

function checkWinner(index) {
    if (game.board[index] === player1.getLetter())
    {
        game.winner = player1;
        game.isOver = true;
    }
    else if (game.board[index] === player2.getLetter())
    {
        game.winner = player2;
        game.isOver = true;
    }
}

function isBoardFull() {
    let isFull = true;
    game.board.forEach((cell) => {
        if (cell === "")
            isFull = false;
    });
    return isFull;
}