const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapLocation } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching locations from Contentful...");

  const locationEntries = await fetchAllEntriesForContentType("locations");

  const locations = locationEntries
    .map((i) => mapLocation(i))
    .sort((a, b) => a.name.localeCompare(b.name)); // sort by name alphabetically
  //console.log(`*** Mapped, sorted locations: ${JSON.stringify(locations)}`);

  console.log(`... fetched ${locations.length} locations.`);

  return locations;
};

