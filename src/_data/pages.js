const { deliveryApiClient } = require("../../contentful/client");

module.exports = async function () {
  console.log("Fetching pages from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "page",
  });
  console.log(`*** Response: ${JSON.stringify(response)}`);

  const referencedEntries = response.includes?.Entry?.reduce((acc, entry) => {
    acc[entry.sys.id] = entry.fields;
    return acc;
  }, {}) || {};
  console.log(`*** Referenced entries: ${JSON.stringify(referencedEntries)}`);

  const pages = response.items
    .map(i => mapPages(i, referencedEntries))
    .sort((a, b) => b.date - a.date); // sort newest first
  console.log(`*** Mapped, sorted pages: ${JSON.stringify(pages)}`);

  console.log(`... fetched ${pages.length} pages.`);
  return pages;
};

const mapPages = (entry, referencedEntries) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: new Date(entry.sys.createdAt),
    bodyRichText: entry.fields.pageContent
  };
}