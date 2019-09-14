const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-seneca-ms:common", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/common"))
      .withPrompts({ someAnswer: true });
  });

  test("It can create files", () => {
    assert.file(["dummyfile.txt"]);
  });
});
