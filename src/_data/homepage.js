const { deliveryApiClient } = require("../lib/contentful/client");
const { mapComponents } = require("../lib/contentful/componentMapper");

module.exports = async function () {
  console.log("Fetching homepage from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "homepage",
    limit: 1
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const homepage = response.items
    .map(i => mapHomepage(i))[0]; // we expect exactly one homepage entry
  //console.log(`*** Mapped homepage: ${JSON.stringify(homepage)}`);

  console.log(`... fetched homepage.`);
  return homepage;
};

const mapHomepage = (entry) => {
  return {
    title: entry.fields.title,
    components: mapComponents(entry.fields.components)
  };
}
