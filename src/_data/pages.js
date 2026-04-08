const { deliveryApiClient } = require("../../contentful/client");

module.exports = async function () {
  console.log("Fetching pages from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "page",
    limit: 1000
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const pages = response.items
    .map(i => mapPages(i))
    .sort((a,b) => a.urlPath.localeCompare(b.urlPath)); // sort by path
  //console.log(`*** Mapped, sorted pages: ${JSON.stringify(pages)}`);

  console.log(`... fetched ${pages.length} pages.`);
  return pages;
};

const mapPages = (entry) => {
  return {
    title: entry.fields.title,
    urlPath: getFullPath(entry),
    lastUpdatedDate: new Date(entry.sys.updatedAt || entry.sys.createdAt),
    bodyRichText: entry.fields.pageContent
  };
}

const getFullPath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
}
