import { Player } from "./player";
import { renderBoards } from './dom'

let p1
let p2

function initGame() {
    p1 = new Player("You")
    p2 = new Player("Your Enemy")

    // set turn to p1
    p1.isTurn(p2)
    // computer needs a random fleet
    p2.randomFleet()

    // need to make some dom rendering methods that will go here
    // this should render a start button and a random button
    renderButtons(p1)
    // this should render the player boards
    renderBoards(p1,p2)
}
export { initGame, p1, p2 }