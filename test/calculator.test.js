import { add, sub, multi, div } from "../script/calculator";


test("2 + 2 = 4", () => {
    expect(add(2, 2)).toEqual(4);
  });
  
  test("15 - 25 = -10", () => {
    expect(sub(15, 25)).toEqual(-10);
  });
  
  test("2 * 4 to equal 8", () => {
    expect(multi(2, 4)).toEqual(8);
  });
  
  test("4 / 4 to equal 1", () => {
    expect(div(4, 4)).toEqual(1);
  });
  
  test("4 / 0 to be Null", () => {
    expect(div(4, 0)).toBeNull();
  });
  