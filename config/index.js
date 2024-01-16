var configValues = require("./config");

module.exports = {
  getDbConnectionString: function () {
    return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.uvb2hbd.mongodb.net/?retryWrites=true&w=majority`;
  },
};
