const pluginWebc = require('@11ty/eleventy-plugin-webc');
const renderHTML = require('./src/utils/renderHTML');

module.exports = function(config) {
  config.addPlugin(pluginWebc, {
    components: 'src/_components/**/*.webc'
  });

  config.addShortcode('renderHTML', renderHTML);
  config.addPassthroughCopy('src/bundle.css');

  return {
    dir: {
      data: 'data',
      includes: 'components',
      input: 'src',
      layouts: 'layouts',
      output: 'dist',
    }
  }
}
