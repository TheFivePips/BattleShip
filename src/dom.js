import { initGame, p1, p2 } from "./game";

// the naming is slightly confusing because you are actually interacting with the other players board, unlike in the IRL version of the game
function renderBoards(p1, p2) {
    // the first for loop will create the first board
    // i and j will efectively be the coordinates of the board
    for(let i =0; i < 10; i++){
        // create rows of divs
        let row = document.createElement('div')
        row.classList.add('row-p1')
        // dynamically give the rows ids 
        row.setAttribute('id', `p1-row${i}`)
        document.getElementById('board1').appendChild(row)
        // create cells for each row
        p1.board.board[i].forEach((e, j) => {
            let cell = document.createElement('div')
            cell.classList.add('cell-p1')
            // j is the index of the current element as described in the foreach syntax
            cell.setAttribute('id', `p1-row${i}-cell${j}`)
            row.appendChild(cell)
            // each cell needs an event listener for attacking
            cell.addEventListener("click", (e) => {
                // if it is not p1 turn or the game hasnt started
                if(!p1.turn.get() || !p1.board.isStartAllowed.get()) return
                // takes the event, x and y coordinates, and both players
                renderAttackP1(e, i ,j, p1, p2)
            })
        });
    }
    // this second for loop will create the second board
    for(let i =0; i < 10; i++){
        let row = document.createElement('div')
        row.classList.add('row-p2')
        row.setAttribute('id', `p2-row${i}`)
        document.getElementById('board2').appendChild(row)

        p2.board.board[i].forEach((e,j) => {
            let cell = document.createElement('div')
            cell.classList.add('cell-p2')
            cell.setAttribute('id', `p2-row${i}-cell${j}`)
            row.appendChild(cell)
        })
    }
}
//resets the boards
function resetBoards() {
    // just set everything back to blank canvas
    document.querySelector(".board-buttons").innerHTML = "";
    document.querySelector(".ships").innerHTML = "";
    document
      .querySelectorAll(".board")
      .forEach((board) => (board.innerHTML = ""));
    initGame();
}

renderAttackP1(event, x, y, p1, p2)



export { renderBoards }