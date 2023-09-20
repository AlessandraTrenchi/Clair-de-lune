const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          timers: require.resolve("timers-browserify"),
        },
      },
    },
  },
};
