const path = require("path");
const helpers = require("yeoman-test");

describe("generator-seneca-ms:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app"));
  });

  test("It logs success", async next => {
    next();
  });
});
