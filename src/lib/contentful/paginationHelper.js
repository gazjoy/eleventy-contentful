const { deliveryApiClient } = require("./apiClient");

const PAGE_SIZE = 1000; // max allowed by Contentful

/**
 * Fetches all entries for a given content type using cursor pagination
 * @param {string} contentType - The content type ID to fetch
 * @returns {Promise<Array>} Array of all entries
 */
async function fetchAllEntriesForContentType(contentType) {
  const allItems = [];
  let query = {
    content_type: contentType,
    limit: PAGE_SIZE,
    cursor: true,
  };

  while (query) {
    const response = await deliveryApiClient.getEntries(query);
    allItems.push(...response.items);

    const nextUrl = response.pages?.next;
    if (!nextUrl) break;

    console.log(`... fetched ${allItems.length} items so far, need to fetch more ...`);

    const pageNext = new URL(nextUrl, "https://cdn.contentful.com").searchParams.get("pageNext");
    query = pageNext
      ? {
          pageNext,
          limit: PAGE_SIZE,
        }
      : null;
  }

  return allItems;
}

module.exports = { fetchAllEntriesForContentType };
