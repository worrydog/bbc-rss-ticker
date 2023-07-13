// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require("webpack");

module.exports = function override(config, env) {
    
  // config.plugins.push(new NodePolyfillPlugin({
    // excludeAliases: ['console'],
  // }));

  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    timers: require.resolve("timers-browserify"),
    buffer: require.resolve("buffer"),
    url: require.resolve("url")
  });
  config.resolve.fallback = fallback;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config
}