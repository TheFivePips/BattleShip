import { Ship } from './ship.js'

class Gameboard {
    constructor(){
        this.isStartAllowed = false
        this.hasStarted = false
        this.board = this.init()
       
    }

    getIsStartAllowed(){
        return this.isStartAllowed
    }
    setIsStartAllowed(val){
        this.isStartAllowed = val
    }

    getHasStarted(){
        return this.hasStarted
    }
    setHasStarted(val){
        this.hasStarted = val
    }

    // this should create a 10x10 grid of "false" arrays that can be accessed easily using grid[x][y]
    init(){
        let grid = []
        for(let i = 0; i < 10; i++){
            grid.push([])
            for(let j =0; j < 10; j++) {
                grid[i].push(false)
            }
        }
        return grid
    }

    // places ships  coordinates by calling the ship factory function
    // x is for rows(up and down the grid), y for columns (left an right on the grid) direction will determin orientation
    placeShips(x, y, length, direction){
        // if the spot on the grid is occupied
        if(this.board[x][y]) return false

        let ship = new Ship(length)

        // this variable will help us keep track of the exact spot of each ship on the board and their internal body positions in relation to the board
        let shipPosition = 0

        // if the ship is horizontal
        if(direction === 'horizontal'){
            // check if it will overflow the board
            if(y + ship.length > 10) return false
            // actually place the ship by removing false from each grid item and replacing with the ship spaces
            for(let i = y; i < y + ship.length; i++){
                this.board[x].splice(i,1, {ship, shipPosition})
                shipPosition++
            }
        }
        // if vertical
        if(direction === 'vertical'){
            if(x + ship.length > 10) return false
            for(let i = x; i < x + ship.length; i++){
                this.board[i].splice(y,1, {ship, shipPosition})
                shipPosition++
            }
        }
    }

    // takes a pair of coordinates, determins whether or not the attack hit
    // and then sends the hit() to the correct ship, or it records the coordinate of the missed shot
    receiveAttack(x,y){
        // if the spot has already been fired on
        if(this.board[x][y] === 'miss') return false

        // if the spot has alredy been hit
        if(typeof this.board[x][y] === 'object' &&
        this.board[x][y].ship.body[this.board[x][y].shipPosition] === 'hit'
        ){
            return false
        }
        
        // if the spot is a miss
        if(!this.board[x][y]){
            this.board[x][y] = 'miss'
            return this.board[x][y]
        }
        // otherwise its a hit
        else {
            // call the hit function from the ship
            this.board[x][y].ship.hit(this.board[x][y].shipPosition)
            // return the spot it was hit
            return this.board[x][y].ship.body[this.board[x][y].shipPosition]
        }
    }
    // calls the internal ship function to check if all the positions have been hit
    isSunk = function(x,y) {
        return this.board[x][y].ship.isSunk() === true ? true : false
    }
    // pass in the board
    areAllSunk = (board) => {
        let notSunk = false;
        // loop through the board and for each ship found, call the isSunk method on it
        for (let i = 0; i < 10; i++)
          board[i].forEach((e) => {
            // if the spot is false or a miss
            if(!e || e === "miss") return;
            // if the spot has a ship on it
            // if any ship is not sunk areAllSunk returns false
            if(e.ship.isSunk() === false) notSunk = true;
          });
        return notSunk === true ? false : true;
      };
    
}

export { Gameboard }
// let gb = new Gameboard()
// console.log(gb.board[0])