import { add, remove } from "./modules/crud.js";

export const addItem = add;
export const removeItem = remove;

// eslint-disable-next-line import/prefer-default-export
export function sum(a, b) {
  return a + b;
}
