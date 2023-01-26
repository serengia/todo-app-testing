import { expect, jest, test } from "@jest/globals";
import { addItem, removeItem, sum } from "./add-remove";

test("Testing add", () => {
  const des = "To do 1";
  const status = true;

  //   const testObj = {
  //     des,
  //     status,
  //   };

  //   expect(testObj.toHaveProperty("To do 1"));
  expect(addItem(des, status)).toBeCalled();
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
