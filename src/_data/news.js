const { deliveryApiClient } = require("../../contentful/client");
// const { DateTime } = require("luxon");

module.exports = async function () {
  console.log("Fetching news posts from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "newsPost",
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const referencedEntries = response.includes?.Entry?.reduce((acc, entry) => {
    acc[entry.sys.id] = entry.fields;
    return acc;
  }, {}) || {};
  //console.log(`*** Referenced entries: ${JSON.stringify(referencedEntries)}`);

  const newsPosts = response.items
    .map(i => mapNewsPost(i, referencedEntries))
    .sort((a, b) => a.dateIsoString - b.dateIsoString); // sort oldest first
  //console.log(`*** Mapped, sorted news posts: ${JSON.stringify(newsPosts)}`);

  console.log(`... fetched ${newsPosts.length} news posts.`);
  return newsPosts;
};

const mapNewsPost = (entry, referencedEntries) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    dateIsoString: new Date(entry.fields.postingDate || entry.sys.createdAt).toISOString(),
    bodyRichText: entry.fields.body,
    authorName: referencedEntries[entry.fields.author.sys.id]?.name || "Unknown Author"
  };
}