require('dotenv').config();
const { createClient } = require('contentful');

const deliveryApiClient = createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = { deliveryApiClient };
