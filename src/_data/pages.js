const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapPage } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching pages from Contentful...");

  const allItems = await fetchAllEntriesForContentType("page");

  const pages = allItems
    .map((i) => mapPage(i))
    .sort((a, b) => a.urlPath.localeCompare(b.urlPath)); // sort by path
  //console.log(`*** Mapped, sorted pages: ${JSON.stringify(pages)}`);

  console.log(`... fetched ${pages.length} pages.`);

  // Return the data in different structures, just for convenience. 
  const data = {
    flatList: pages,
    hierarchy: buildHierarchy(pages), 
  };
  //console.log(`*** Pages data: ${JSON.stringify(data)}`);

  return data;
};

const buildHierarchy = (pages) => {
  const pagesByPath = new Map(
    pages.map(({ parentUrlPath, ...page }) => [page.urlPath, { ...page }])
  );
  const hierarchy = [];

  for (const page of pages) {
    const pageNode = pagesByPath.get(page.urlPath);

    if (page.parentUrlPath) {
      const parentNode = pagesByPath.get(page.parentUrlPath);

      if (parentNode) {
        parentNode.childPages.push(pageNode);
        continue;
      }
    }

    hierarchy.push(pageNode);
  }

  return hierarchy;
};