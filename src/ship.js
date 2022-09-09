
// each ship needs a length, where the have been hit, and if they have been sunk

export class Ship {
    constructor(name, length){
        this.name = name
        this.length = length
        this.body = [...Array(length)].map(x => 'O');
        this.sunk = false

    }
    
    getName() {return this.name}
    
    getBody() {return this.body}
    
    isSunk(){
        this.body.every((item) => item === "X") ? console.log(`You sunk my ${this.name}`) : console.log("Not sunk yet");
        
    }
    
    hit(position) {
        this.body[position] = "X"
        console.log("Hit!");
        this.isSunk()
    }
} 


