/**
 * @jest-environment jsdom
 */

// import fs from "fs";
// import path from "path";

// import { sum } from "./index.js";

// // // import { beforeEach, expect, it, vi } from 'vitest';
// const jsdom = require("jsdom");

// const { JSDOM } = jsdom;

// const htmlDocPath = path.join(process.cwd(), "index.html");
// const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// const document = new JSDOM(htmlDocumentContent);

// // jest.stubGlobal("document", document);

// beforeEach(() => {
//   document.body.innerHTML = "";
//   document.write(document);
// });

// Started

import { sum } from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
