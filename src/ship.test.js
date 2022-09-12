import { Ship } from './ship.js'

test("does patrol boat return the correct object", () => {
    const patrolBoat = new Ship(2)
    expect(patrolBoat).toEqual({
        length: 2,
        body: [ 0, 1 ],
      })
})
test("does submarine return the correct object", () => {
    const submarine = new Ship(3)
    expect(submarine).toEqual({
        length: 3,
        body: [ 0, 1, 2 ],
      })
})
test("does the hit method work", () => {
    const patrolBoat = new Ship(2)
    patrolBoat.hit(0)
    expect(patrolBoat.body[0]).toEqual('hit')
})
test("Does the isSunk method work", () => {
    const patrolBoat = new Ship(2)
    patrolBoat.hit(0)
    patrolBoat.hit(1)

    expect(patrolBoat.isSunk()).toBeTruthy()
})
