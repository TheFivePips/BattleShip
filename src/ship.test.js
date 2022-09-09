import { Ship } from './ship.js'

test("does patrol boat equal what i think it should", () => {
    const patrolBoat = new Ship("Patrol Boat", 2)
    expect(patrolBoat).toEqual({
        name: 'Patrol Boat',
        length: 2,
        body: [ 'O', 'O' ],
        sunk: false
      })
})