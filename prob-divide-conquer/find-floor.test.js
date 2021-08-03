const findFloor = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
    expect(findFloor([8, 9, 10, 10, 10, 12, 19], 8)).toBe(8) // 8
    expect(findFloor([1, 2, 3, 4, 5, 12, 19], 7)).toBe(5) // 5
    expect(findFloor([4, 4, 4, 4, 4, 12, 19], 5)).toBe(4) // 4
  })
})