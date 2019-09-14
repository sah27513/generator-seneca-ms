// Import The Generator
const SenecaCommon = require("../common");

module.exports = class extends SenecaCommon {
  initializing() {
    this.log("method 2 just ran");
    this.composeWith(require.resolve("generator-seneca-ms/generators/common"));
  }
};
