import { Ship } from './ship.js'

test("does patrol boat return the correct object", () => {
    const patrolBoat = new Ship("Patrol Boat", 2)
    expect(patrolBoat).toEqual({
        name: 'Patrol Boat',
        length: 2,
        body: [ 'O', 'O' ],
        sunk: false
      })
})
test("does submarine return the correct object", () => {
    const submarine = new Ship("Submarine", 3)
    expect(submarine).toEqual({
        name: 'Submarine',
        length: 3,
        body: [ 'O', 'O', 'O' ],
        sunk: false
      })
})
test("does destroyer return the correct object", () => {
    const destroyer = new Ship("Destroyer", 3)
    expect(destroyer).toEqual({
        name: 'Destroyer',
        length: 3,
        body: [ 'O', 'O', 'O' ],
        sunk: false
      })
})
test("does battleship return the correct object", () => {
    const battleship = new Ship("Battleship", 4)
    expect(battleship).toEqual({
        name: 'Battleship',
        length: 4,
        body: [ 'O', 'O', 'O', 'O' ],
        sunk: false
      })
})
test("does carrier return the correct object", () => {
    const carrier = new Ship("Carrier", 5)
    expect(carrier).toEqual({
        name: 'Carrier',
        length: 5,
        body: [ 'O', 'O', 'O', 'O', 'O' ],
        sunk: false
      })
})
test("1.do the ship object methods work", () => {
    const patrolBoat = new Ship("Patrol Boat", 2)
    expect(patrolBoat.getName()).toBe("Patrol Boat")
})
test("2.do the ship object methods work", () => {
    const patrolBoat = new Ship("Patrol Boat", 2)
    expect(patrolBoat.getBody()).toEqual([ 'O', 'O' ])
})
