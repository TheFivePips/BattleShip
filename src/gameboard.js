import { Ship, ship } from './ship.js'

class Gameboard {
    constructor(size){
        this.size = size
        this.missedShots = []
        this.grid = this.createGameBoard()
    }
    // this should create a 10x10 grid of empty arrays that can be accessed easily using grid[x][y]
    createGameBoard(){
        let grid = []
        for(let i = 0; i < 10; i++){
            grid.push([])
            for(let j =0; j < 10; j++) {
                grid[i].push([])
            }
        }
        return grid
    }

    // places ships at specific coordinates by calling the ship factory function
    placeShips(x,y){
        
    }

    // takes a pair of coordinates, determins whether or not the attack hit
    // and then sends the hit() to the correct ship, or it records the coordinate of the missed shot
    // receiveAttack(x,y)
    
    // hit()

    // have all the ships on the gameboard been hit
    // gameOver()
}

const gb = new Gameboard()
