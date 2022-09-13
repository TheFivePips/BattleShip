
// each ship needs a length, where the have been hit, and if they have been sunk

export class Ship {
    constructor(length){
        
        this.length = length
        this.body = [...Array(length).keys()];
        let domTargets = [];

    }
    
    getBody() {return this.body}
    
    isSunk(){
        // presume they are sunk
        let notSunk = false
        // loop through and if there is one element that hasnt been hit, they are still alive
        this.body.forEach((e) => {
            if(e !== 'hit') notSunk = true
        })
        // if still alive, isSunk returns false
        return notSunk === true ? false : true
        
    }
    
    hit(position) {
        if(this.body[position] === "hit") return false
        this.body.splice(position, 1, "hit")
        this.isSunk()
    }
} 

// const patrolBoat = new Ship(2)
// export const submarine = new Ship(3)
// export const destroyer = new Ship(3)
// export const battleship = new Ship(4)
// export const carrier = new Ship(5)
