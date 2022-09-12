import { Gameboard } from "./gameboard";

test("actually makes a 10x10 gameboard", () => {
    let gb = new Gameboard()
    expect(gb.board.length && gb.board[0].length).toBe(10)
})
test("does the placeShips method work", () => {
    let g = new Gameboard();
    g.placeShips(0, 1, "horizontal");
    expect(g.board[0]).toBeTruthy();
});
test("returns false if there's already a ship on that spot", () => {
    let g = new Gameboard();
    g.placeShips(0, 0, 2, "horizontal");
    expect(g.placeShips(0, 1, 2, "horizontal")).toBe(false);
});
test("reject horizontal boat that goes over right edge", () => {
    let g = new Gameboard();
    // 6 + 5 is greater than 10
    expect(g.placeShips(1, 6, 5, "horizontal")).toBe(false);
});
test("vertical ships can be placed correctly", () => {
    let g = new Gameboard();
    g.placeShips(0, 0, 2, "vertical");
    expect(g.board[0][0] && g.board[1][0]).toBeTruthy();
});
test("reject vertical ship that goes over bottom edge", () => {
    let g = new Gameboard();
    // 7+4 is greater than 10
    expect(g.placeShips(7, 5, 4, "vertical")).toBe(false);
});
test("does the hit function work as expected", () => {
    let g =  new Gameboard();
    g.placeShips(0, 5, 5, "horizontal");
    expect(g.receiveAttack(0, 5)).toBe("hit");
});
test("does the isSunk method work as expected", () => {
    let g = new Gameboard();
    g.placeShips(0, 0, 2, "vertical");
    g.receiveAttack(0, 0);
    g.receiveAttack(1, 0);
  
    expect(g.isSunk(0, 0)).toBeTruthy();
});
test("does the areAllSunk method work as expected", () => {
    let g = new Gameboard();
    g.placeShips(0, 0, 2, "vertical");
    g.placeShips(0, 4, 2, "horizontal");
    
    g.receiveAttack(0, 0);
    g.receiveAttack(1, 0);
    g.receiveAttack(0, 4);
    g.receiveAttack(0, 5);
  
    expect(g.areAllSunk(g.board)).toBeTruthy();
});
  