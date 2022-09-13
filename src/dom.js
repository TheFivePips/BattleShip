import { initGame, p1, p2 } from "./game";

function renderBoards(p1, p2) {

    for(let i =0; i < 10; i++){
        // create rows of divs
        let row = document.createElement('div')
        row.classList.add('row-p1')
        // dynamically give the rows ids 
        row.setAttribute('id', `p1-row${i}`)
        document.getElementById('board1').appendChild(row)
    }
}