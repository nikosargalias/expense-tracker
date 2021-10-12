function sum(a, b) {
  return a + b;
}

function generateGreeting(name) {
  return `Hello ${name}`;
}

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("should return Hello Nikos", () => {
  expect(generateGreeting("Nikos")).toBe("Hello Nikos");
});
