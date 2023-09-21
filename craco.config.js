// Import the 'stream' polyfill
const streamPolyfill = require('stream-browserify');

module.exports = {
  // ... other Webpack configuration options

  resolve: {
    alias: {
      stream: streamPolyfill,
    },
  },

  // ... other Webpack configuration options
};
