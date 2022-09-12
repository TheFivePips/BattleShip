// this class should be able to attack, toggle turn, generate some random coordinates(for the comupter to use) and create a random fleet of six ships

import { Gameboard } from "./gameboard"

class Player {
    constructor(name){
        this.name = name
        this.turn = false
        this.board = new Gameboard()

    }

    getTurn(){
        return this.turn
    }
    setTurn(val) {
        this.turn = val
    }
    // toggle whos turn it is
    isTurn(enemy) {
        this.turn = true
        enemy.setTurn(false)
    }

    attack(enemyPlayer, x, y) {
        return enemyPlayer.board.receiveAttack(x, y)
    }
    // random coordinates for attacks or poistions
    randomCoords(){
        let xCoord = Math.floor(Math.random() *10)
        let yCoord = Math.floor(Math.random() *10)
        return [xCoord, yCoord]
    }

    // random ship with random position
    randomShip(length){
        let xCoord = Math.floor(Math.random() *10)
        let yCoord = Math.floor(Math.random() *10)
        let direction = Math.floor(Math.random())

        if(direction === 0){
            dir = "horizontal"
            // check if a valid posistion
            if(board.placeShip(xCoord, yCoord, length, dir) == false) {
                return false;
            }
            else{
                this.board.placeShips(xCoord, yCoord, length, dir)
            }
        }
        if(direction === 1){
            dir = "vertical"
            if(board.placeShip(xCoord, yCoord, length, dir) == false) {
                return false;
            }
            else{
                this.board.placeShips(xCoord, yCoord, length, dir)
            }
        }
    }
    // create a fleet with random posistions
    // this doenst guarentee a full fleet atm but it will work for now
    randomFleet() {
     
        // create 2 ships of length 2
        for (let i = 0; i < 2; ) {
            if (randomShip(2) == false) continue;
            i++;
        }
        // create 2 ships of length 3
            for (let i = 0; i < 2; ) {
            if (randomShip(3) == false) continue;
        i++;
        }
        // create 1 ship of length 4
            for (let i = 0; i < 1; ) {
            if (randomShip(4) == false) continue;
        i++;
        }
        // create 1 ship of length 5
        for (let i = 0; i < 1; ) {
            if (randomShip(5) == false) continue;
            i++;
        }
        // the game is now ready to be played
        this.board.setIsStartAllowed(true)
    }


}
export { Player }