import todoActions from "./modules/todoActions.js";
import Crud from "./modules/crud.js";

todoActions();

const todoClass = new Crud();
todoClass.updateUI();

// eslint-disable-next-line import/prefer-default-export
export function sum(a, b) {
  return a + b;
}
