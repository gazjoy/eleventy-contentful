const { deliveryApiClient } = require("../lib/contentful/client");

module.exports = async function () {
  console.log("Fetching news posts from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "newsPost",
    limit: 1000
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const newsPosts = response.items
    .map(i => mapNewsPost(i))
    .sort((a, b) => b.date - a.date); // sort newest first
  //console.log(`*** Mapped, sorted news posts: ${JSON.stringify(newsPosts)}`);

  console.log(`... fetched ${newsPosts.length} news posts.`);
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