const fetch = require("node-fetch")
const fs = require('fs')
const { override, addBabelPreset } = require('customize-cra')

module.exports = function (config) {
  config.optimization.runtimeChunk = false
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  }
  return Object.assign(config, override(addBabelPreset('@emotion/babel-preset-css-prop'))(config))
}
