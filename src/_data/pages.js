const { deliveryApiClient } = require("../../contentful/client");

module.exports = async function () {
  console.log("Fetching pages from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "page",
    limit: 1000
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const pages = response.items
    .map((i) => mapPages(i))
    .sort((a, b) => a.urlPath.localeCompare(b.urlPath)); // sort by path
  //console.log(`*** Mapped, sorted pages: ${JSON.stringify(pages)}`);

  console.log(`... fetched ${pages.length} pages.`);

  const data = {
    flatList: pages,
    hierarchy: buildHierarchy(pages),
    idLookup: new Map(pages.map(p => [p.id, p]))  
  };
  //console.log(`*** Pages data: ${JSON.stringify(data)}`);

  return data;
};

const mapPages = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    urlPath: getFullPath(entry),
    parentUrlPath: entry.fields.parentPage ? getFullPath(entry.fields.parentPage) : null,
    childPages: [], // will be populated in buildHierarchy
    lastUpdatedDate: new Date(entry.sys.updatedAt || entry.sys.createdAt),
    bodyRichText: entry.fields.pageContent
  };
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

const getFullPath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
};