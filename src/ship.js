
// each ship needs a length, where the have been hit, and if they have been sunk

export class Ship {
    constructor(length){
        
        this.length = length
        this.body = [...Array(length)].map(x => 'O');
        this.sunk = false

    }
    
    getBody() {return this.body}
    
    isSunk(){
        this.body.every((item) => item === "hit") ? this.sunk = true : this.sunk = false;
        
    }
    
    hit(position) {
        if(this.body[position] === "hit") return false
        this.body.splice(position,1,"hit")
        console.log("Hit!");
        this.isSunk()
    }
} 

// export const patrolBoat = new Ship(2)
// export const submarine = new Ship(3)
// export const destroyer = new Ship(3)
// export const battleship = new Ship(4)
// export const carrier = new Ship(5)
