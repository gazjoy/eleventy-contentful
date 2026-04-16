const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapVenue } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching venues from Contentful...");

  const venueEntries = await fetchAllEntriesForContentType("venue");

  const venues = venueEntries
    .map((i) => mapVenue(i))
    .sort((a, b) => a.name.localeCompare(b.name)); // sort by name alphabetically
  //console.log(`*** Mapped, sorted venues: ${JSON.stringify(venues)}`);

  console.log(`... fetched ${venues.length} venues.`);
  return venues;
};

