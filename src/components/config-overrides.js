const webpack = require('webpack');

module.exports = function override(config, env) {
  // Aggiungi il fallback per timers
  config.resolve.fallback = {
    timers: require.resolve("timers-browserify"),
  };

  return config;
};
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    // ...
  }
  