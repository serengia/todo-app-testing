import { expect, test } from "@jest/globals";
import Crud from "./modules/crud.js";

describe("Remove and Add tests", () => {
  test("Testing add", () => {
    const des = "Test todo";
    const status = false;
    const crud = new Crud();

    expect(crud.addItem(des, status)).toHaveProperty("description");
  });

  test("Testing remove", () => {
    const crud = new Crud();
    const testArr = [
      { id: "001", description: "Test to do" },
      { id: "002", description: "Test to do 2" },
    ];

    expect(crud.deleteItem("001", testArr)[0]).toBe("success");
  });
});

describe("Update item and status", () => {
  test("Testing description", () => {
    const crud = new Crud();
    const todos = crud.updateItem();
    const testArr = [
      { id: "001", description: "Test to do" },
      { id: "002", description: "Test to do 2" },
    ];

    expect(testArr[0]).toEqual({ id: "001", description: "Test to do" });

    expect(crud.updateItem("001", "Test to do", testArr)[0].description).toBe(
      "Test to do"
    );
  });
});
