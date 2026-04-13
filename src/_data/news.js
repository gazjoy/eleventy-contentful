const { deliveryApiClient } = require("../lib/contentful/client");

const PAGE_SIZE = 1000; // max allowed by Contentful, we will paginate if we have more news posts than this

module.exports = async function () {
  console.log("Fetching news posts from Contentful...");

  const allItems = [];
  let query = {
    content_type: "newsPost",
    limit: PAGE_SIZE,
    cursor: true,
  };

  while (query) {
    const response = await deliveryApiClient.getEntries(query);
    allItems.push(...response.items);

    const nextUrl = response.pages?.next;
    if (!nextUrl) break;

    console.log(`... fetched ${allItems.length} news posts so far, need to fetch more ...`);

    const pageNext = new URL(nextUrl, "https://cdn.contentful.com").searchParams.get("pageNext");
    query = pageNext
      ? {
          pageNext,
          limit: PAGE_SIZE,
        }
      : null;
  }

  const newsPosts = allItems
    .map(i => mapNewsPost(i))
    .sort((a, b) => b.date - a.date); // sort newest first

  console.log(`... done. ${newsPosts.length} news posts fetched.`);
  return newsPosts;
};

const mapNewsPost = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: new Date(entry.fields.postingDate || entry.sys.createdAt),
    bodyRichText: entry.fields.body,
    authorName: entry.fields.author.fields.name
  };
}