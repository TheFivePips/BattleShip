import { Ship } from './ship.js'

class Gameboard {
    constructor(size){
        this.size = size
        this.missedShots = []
        this.grid = this.init()
       
    }
    // this should create a 10x10 grid of "false" arrays that can be accessed easily using grid[x][y]
    init(){
        let grid = []
        for(let i = 0; i < 10; i++){
            grid.push([])
            for(let j =0; j < 10; j++) {
                grid[i].push([false])
            }
        }
        return grid
    }

    // places ships  coordinates by calling the ship factory function
    
    placeShips(x,y,length,direction){
        // if the spot on the grid is occupied
        if(this.grid[x][y]) return false

        let ship = new Ship(length)

        // this variable will help us keep track of the exact spot of each ship on the board and their internal body positions in relation to the board
        let shipPosition = 0

        // if the ship is horizontal
        if(direction === 'horizontal'){
            // check if it will over flow the board
            if(y + ship.length > 10) return false
            // check if the spot is alredy reserved
            // for(let i =0; i < length; i++){
            //     if(this.grid[x][y+i] === 'reserved') return false
            // }
            // actually place the ship by removing false from each grid item and replacing with the ship spaces
            for(let i = y; i < y + ship.length; i++){
                this.grid[x].splice(i,1, {ship, shipPosition})
                // reserveAround(x,y + shipPosition)
                shipPosition++
            }
        }
        // if vertical
        if(direction === 'vertical'){
            if(x+ ship.length > 10) return false
            // for(let i = 0; i < length; i++){
            //     if(this.grid[x+1][y] === "reserved")return false
            // }
            for(let i = x; i < x+ ship.length; i++){
                this.grid[i].splice(y,1, {ship, shipPosition})
                // reserveAround(x + shipPosition, y)
                shipPosition++
            }
        }
    }

    // takes a pair of coordinates, determins whether or not the attack hit
    // and then sends the hit() to the correct ship, or it records the coordinate of the missed shot
    receiveAttack(x,y){
        // if the spot has already been fired on
        if(this.grid[x][y] === 'miss') return false

        // if the spot has alredy been hit
        if(typeof this.grid[x][y] === 'object' &&
        this.grid[x][y].ship.body[this.grid[x][y].shipPosition] === 'hit'
        ){
            return false
        }
        
        // if the spot is a miss
        if(!this.grid[x][y]){
            this.grid[x][y] = 'miss'
            return this.grid[x][y]
        }
        // otherwise its a hit
        else {
            // call the hit function from the ship
            this.grid[x][y].ship.hit(this.grid[x][y].shipPosition)
            // return the spot it was hit
            return this.grid[x][y].ship.body[this.grid[x][y].shipPosition]
        }
    }
    // calls the internal ship function to check if all the positions have been hit
    isSunk = function(x,y) {
        return this.grid[x][y].ship.isSunk() === true ? true : false
    }
    areAllSunk = function(grid) {
        let notAllSunk = false
        for(let i = 0; i < 10; i++){
            // loop through the bord and querey if each ship has been not been sunk
            grid[i].forEach(e => {
                if(!e || e === 'miss') return
                if(e.ship.sunk === false) notAllSunk = true
            });
            // if they havent all been sunk return false
            return notAllSunk === true ? false : true
        }
    } 
    
}

const gb = new Gameboard()
console.log(gb.grid);
