const { deliveryApiClient } = require("../../contentful/client");

module.exports = async function () {
  console.log("Fetching pages from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "page",
    limit: 1000
  });
  console.log(`*** Response: ${JSON.stringify(response)}`);

  const pages = response.items
    .map(i => mapPages(i))
    .sort((a, b) => a.slug.localeCompare(b.slug)); // sort by slug
  console.log(`*** Mapped, sorted pages: ${JSON.stringify(pages)}`);

  console.log(`... fetched ${pages.length} pages.`);
  return pages;
};

const mapPages = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    lastUpdatedDate: new Date(entry.sys.updatedAt || entry.sys.createdAt),
    bodyRichText: entry.fields.pageContent
  };
}