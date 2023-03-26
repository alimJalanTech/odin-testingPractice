import reverseString from "../script/reverseString";

test("Example 1: Alphabet Reverse", () => {
  const object = reverseString("abcde");
  expect(object).toEqual("edcba");
});

test("Example 1: Hello World Reverse", () => {
  const object = reverseString("hello world");
  expect(object).toEqual("dlrow olleh");
});

test("Example 1: Empty", () => {
  const object = reverseString("");
  expect(object).toEqual("");
});
