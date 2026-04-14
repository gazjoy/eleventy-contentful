const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapNewsPost } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching news posts from Contentful...");

  const allItems = await fetchAllEntriesForContentType("newsPost");

  const newsPosts = allItems
    .map(i => mapNewsPost(i))
    .sort((a, b) => b.date - a.date); // sort newest first
  //console.log(`*** Mapped, sorted news posts: ${JSON.stringify(newsPosts)}`);

  console.log(`... done. ${newsPosts.length} news posts fetched.`);
  return newsPosts;
};
