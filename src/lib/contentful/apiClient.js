require('dotenv').config();
const { createClient } = require('contentful');

const deliveryApiClient = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

module.exports = { deliveryApiClient };
