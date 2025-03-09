

let currentPlayer = "X";
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boardDiv = document.getElementById("board");

function render() {
    boardDiv.innerHTML = '';
    board.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = value;
        cell.setAttribute("data-index", index);
        cell.addEventListener("click", () => cellClicked(index));
        boardDiv.appendChild(cell);
    });
}

function cellClicked(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        render();
        if (checkWinner()) {
            alert(currentPlayer + " wins!");
            resetBoard();
            return;
        }
        if (board.every(cell => cell !== '')) {
            alert("It's a draw!");
            resetBoard();
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    return winningCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    render(); // Re-render the board after clearing it
}

// Get reset button element
const resetBtn = document.getElementById("resetBtn");

// Add click event listener to reset button
resetBtn.addEventListener("click", resetBoard);

render();
