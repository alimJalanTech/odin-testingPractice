import capitalize from "../script/capitalize";

test("Example 1: Alphabet Capitalize", () => {
  const object = capitalize("abcde");
  expect(object).toEqual("Abcde");
});

test("Example 2: Hello World", () => {
  const object = capitalize("hello world");
  expect(object).toEqual("Hello world");
});

test("Example 3: Empty String", () => {
  const object = capitalize("");
  expect(object).toEqual("");
});
