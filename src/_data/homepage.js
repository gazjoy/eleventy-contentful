const { deliveryApiClient } = require("../lib/contentful/apiClient");
const { mapHomepage } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching homepage from Contentful...");

  const homepageEntry = await deliveryApiClient.getEntries({ 
    content_type: "homepage",
    limit: 1
  });

  const homepage = homepageEntry.items
    .map(i => mapHomepage(i))[0]; // we expect exactly one homepage entry
  //console.log(`*** Mapped homepage: ${JSON.stringify(homepage)}`);

  console.log(`... fetched homepage.`);
  return homepage;
};
