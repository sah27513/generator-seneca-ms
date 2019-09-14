const path = require("path");
const helpers = require("yeoman-test");

describe("generator-seneca-ms:client", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/client"));
  });

  test("It logs success", async next => {
    next();
  });
});
