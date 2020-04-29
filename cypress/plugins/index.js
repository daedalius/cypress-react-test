
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const webpackConfig = require('../../webpack.config');

module.exports = (on, config) => {
  on('file:preprocessor', webpackPreprocessor({
    watchOptions: {},
    webpackOptions: {
      module: webpackConfig.module
    }
  }))
}
