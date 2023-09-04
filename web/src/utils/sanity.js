const EleventyFetch = require('@11ty/eleventy-fetch');

const fetch_sanity = async function({ query }) {
  // escape special characters, so the query can be passed to the URL
  let encodedQuery = encodeURIComponent(query);

  // complete url consisting of <project_id>.api.sanity.io/<api version as YYYY-MM-DD>
  let url = `https://b5y7zctp.api.sanity.io/v2023-09-04/data/query/production?query=${encodedQuery}`;

  // const options = {
  //   headers: {
  //     'Authorization': `Bearer ${process.env.SANITY_TOKEN}`
  //   }
  // };

  const data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json',
    // fetchOptions: options
  });

  return data.result;
}

module.exports = {
  fetch_sanity
}
