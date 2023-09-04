const { fetch_sanity } = require('../../utils/sanity');

module.exports = async function() {
  return await fetch_sanity({
    query: `*[_type=="modular"]`
  });
}
