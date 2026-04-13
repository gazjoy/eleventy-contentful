const { deliveryApiClient } = require("../lib/contentful/client");

module.exports = async function () {
  console.log("Fetching locations from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "locations",
    limit: 1000
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const locations = response.items
    .map((i) => mapLocations(i))
    .sort((a, b) => a.name.localeCompare(b.name)); // sort by name
  //console.log(`*** Mapped, sorted locations: ${JSON.stringify(locations)}`);

  console.log(`... fetched ${locations.length} locations.`);

  return locations;
};

const mapLocations = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    location: entry.fields.location, // { lat, lon }
    phoneNumber: entry.fields.phoneNumber,
    website: entry.fields.website,
  };
};