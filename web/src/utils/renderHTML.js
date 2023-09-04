const { toHTML } = require('@portabletext/to-html');

module.exports = function(input) {
  const blocks = {
    types: {},
    marks: {},
  }

  return toHTML(input, { components: blocks });
}
