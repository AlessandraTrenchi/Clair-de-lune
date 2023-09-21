const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add a fallback for the 'timers' module
  config.resolve.fallback = {
    timers: require.resolve('timers-browserify'),
  };

  return config;
};
