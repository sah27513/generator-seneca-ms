const path = require("path");
const helpers = require("yeoman-test");

describe("generator-seneca-ms:service", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/service"));
  });

  test("It logs success", async next => {
    next();
  });
});
