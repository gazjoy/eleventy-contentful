const { DateTime } = require("luxon");
const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapEvent } = require("../lib/contentful/contentMapper");
const { luxonDateTimeOptions } = require("../lib/utils/helpers");

module.exports = async function () {
  console.log("Fetching events from Contentful...");

  const eventEntries = await fetchAllEntriesForContentType("event");

  const events = eventEntries.map(i => mapEvent(i));
  //console.log(`*** Mapped events: ${JSON.stringify(events)}`);

  console.log(`... done. ${events.length} events fetched.`);

  const today = DateTime.now(luxonDateTimeOptions).startOf("day");

  const data = {
    // future and current events, sorted date ascending
    upcoming: events.filter(e => e.endDate >= today).sort((a, b) => a.startDate - b.startDate),

    // past events, sorted date descending, grouped by year
    past: Map.groupBy(
      events.filter(e => e.endDate < today).sort((a, b) => b.startDate - a.startDate),
      e => e.startDate.year
    ),
  };

  //console.log(`*** Events data: ${JSON.stringify(data)}`);

  return data;
};
