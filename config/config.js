var cfenv = require("cfenv");

var localOptions = {
  vcap : {
    services: {
      "mongolab": [
        {
          "name": "development",
          "label": "mongolab",
          "credentials": {
            "uri": "mongodb://localhost:27017/mhealthDev"
          }
        },
        {
          "name": "test",
          "label": "mongolab",
          "credentials": {
            "uri": "mongodb://localhost:27017/mhealthTest"
          }
        }
      ]
    }
  }
};
var appEnv = cfenv.getAppEnv(localOptions);
var env = process.env.NODE_ENV || 'development';

module.exports = appEnv.getServices('mongolab')[env].credentials;