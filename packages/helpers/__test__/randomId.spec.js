const { randomId } = require("../src/randomId");
// import { randomId } from "../src/randomId";

test("randomId should return a string with default length 6", () => {
  const id = randomId();
  expect(typeof id).toBe("string");
  expect(id).toHaveLength(6);
});

test("randomId should return a string with length 10", () => {
  const len = 10;
  const id = randomId(len);
  expect(typeof id).toBe("string");
  expect(id).toHaveLength(len);
});
