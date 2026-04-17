const { deliveryApiClient } = require("./apiClient");

const PAGE_SIZE = 1000; // max allowed by Contentful

/**
 * Fetches all entries for a given content type using cursor pagination
 * @param {string} contentType - The content type ID to fetch
 * @returns {Promise<Array>} Array of all entries
 */
async function fetchAllEntriesForContentType(contentType) {
  const allEntries = []

  let query = {
    content_type: contentType,
    include: 10, // to ensure we resolve linked entries/assets for rich text references
    limit: PAGE_SIZE,
    cursor: true,
  };

  while (query) {
    const response = await deliveryApiClient.getEntries(query);
    if (response.errors) {
      console.warn(`Error fetching entries for content type "${contentType}":`, response.errors);
    }

    allEntries.push(...response.items);

    const nextUrl = response.pages?.next;
    if (!nextUrl) break;

    console.log(`... fetched ${allEntries.length} items so far, need to fetch more ...`);

    const pageNext = new URL(nextUrl, "https://cdn.contentful.com").searchParams.get("pageNext");
    query = pageNext
      ? {
          pageNext,
          limit: PAGE_SIZE,
        }
      : null;
  }

  return allEntries;
}

module.exports = { fetchAllEntriesForContentType };
