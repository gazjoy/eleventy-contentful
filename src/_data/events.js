const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapEvent } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching events from Contentful...");

  const allItems = await fetchAllEntriesForContentType("event");

  const events = allItems
    .map(i => mapEvent(i))
    .sort((a, b) => b.startTime - a.startTime); // sort newest first
  //console.log(`*** Mapped, sorted events: ${JSON.stringify(events)}`);

  console.log(`... done. ${events.length} events fetched.`);
  return events;
};
