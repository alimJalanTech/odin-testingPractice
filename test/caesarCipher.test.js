import caesarCipher from "../script/caesarCipher";

test("Example 1: Hello Program", () => {
    const object = caesarCipher("HELLO WORLD");
    expect(object).toEqual("URYYB JBEYQ");
  });
  
  test("Example 2: Empty String", () => {
    const object = caesarCipher("");
    expect(object).toEqual("");
  });
  