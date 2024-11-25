// User story 3: Define the board size
const board_size = 8;
const chessboard = document.getElementById('chessboard');

// Set up the grid dimensions
chessboard.style.gridTemplateColumns = `repeat(${board_size}, 1fr)`;

// User story 4: Create the grid
for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
        cell.textContent = (i + j) % 2 === 0 ? '*' : '#';
        chessboard.appendChild(cell);
    }
}
