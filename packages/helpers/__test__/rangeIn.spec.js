const { rangeIn } = require("../src/rangeIn");
// import { randomId } from "../src/randomId";

test("rangeIn 返回的数要在两个数之间", () => {
  const start = 2;
  const end = 10;
  let number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
  expect(number).toBeLessThanOrEqual(end);

  number = rangeIn(start, end);
  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
});
