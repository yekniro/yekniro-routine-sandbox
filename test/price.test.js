import { test } from "node:test";
import assert from "node:assert/strict";
import { totalWithTax } from "../src/price.js";

test("no tax", () => {
  assert.equal(totalWithTax(1000, 0), 1000);
});

test("a whole-cent tax", () => {
  assert.equal(totalWithTax(1000, 900), 1090);
});

test("a fractional cent rounds half up", () => {
  // 1005 × 9 % = 90.45 → 90 (below half); 1050 × 9.5 % = 99.75 → 100 (half or more rounds up)
  assert.equal(totalWithTax(1005, 900), 1095);
  assert.equal(totalWithTax(1050, 950), 1150);
});

test("refuses a negative or fractional amount", () => {
  assert.throws(() => totalWithTax(-1, 900), RangeError);
  assert.throws(() => totalWithTax(10.5, 900), RangeError);
});
