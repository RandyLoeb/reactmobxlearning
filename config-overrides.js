const rewireMobX = require("react-app-rewire-mobx");
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireMobX(config, env);
  return config;
};
