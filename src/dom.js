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

//render buttons and add event listeners
function renderButtons(player) {
    const boardButtons = document.querySelector(".board-buttons");
    const board1 = document.getElementById("board1");
    const board2 = document.getElementById("board2");
    // create the random and reset buttons
    boardButtons.innerHTML = `
      <button class="main-random">Random board</button>
      <button class="main-reset">Reset board</button>
   `;
    // reset btn event listener
   document.querySelector(".main-reset").addEventListener("click", () => {
        //prevents bug when clicking reset during enemy's turn
        if (!player.turn.get()) return;

        //resets boards and gives the first board a class that will blur the board
        resetBoards(player);
        board1.classList.add("notStarted");
    });
    // random btn event listener that creates and renders a random fleet
    document.querySelector(".main-random").addEventListener("click", () => {
        // first clear the board
        resetBoards();
        // make a random fleet and render it
        p1.randomFleet();
        renderPlayerFleet(p1);
        // now that we have a fleet we can begin the actual game
        p1.board.isStartAllowed.set(true);
        // once a random fleet is selected, there is no need to display the ships container anymore
        document.querySelector(".ships").innerHTML = "";
    });
    // create the start button and its event listener
    board1.innerHTML += `<button class="main-start">Start</button>`;
    document.querySelector(".main-start").addEventListener("click", (e) => {
        // prevent starting when not all ships are placed on the board
        if (player.board.isStartAllowed.get() === false) return;
    
        //blur toggles before and after start
        board1.classList.remove("notStarted");
        player.board.hasStarted.set(true);
    
        //removes start button and the random button when game starts
        board1.removeChild(e.target);
        boardButtons.removeChild(document.querySelector(".main-random"));
    });
}
// this will take the fleet generated in the player's randomFleet method,
// the fleet that has already been placed onto the board at this point, and
// give each cell that doesnt contain false(i.e the cells that are where the ships are located) the class of fleet, thus rendering them to the dom
function renderPlayerFleet(player) {
    // select all the cells on the board. i is the index
    document.querySelectorAll(".cell-p2").forEach((e, i) => {
        let pos1
        let pos2;
        // make this a string to be split once we get into double digit numbers
        let pos = "" + i;
        // for single digit numbers in the group
        if (i < 10) {
            pos1 = 0;
            pos2 = i;
        //for double digit numbers in the group 
        // transform index string to array of pos1 and pos2
        } else {
          pos = pos.split("");
          pos1 = pos[0];
          pos2 = pos[1];
        }
    
        if (!player.board.board[pos1][pos2]) return;
        
        else e.classList.add("fleet");
    });
}


renderAttackP1(event, x, y, p1, p2)



export { renderBoards }