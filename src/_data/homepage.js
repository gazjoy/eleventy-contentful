const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapHomepage } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching homepage from Contentful...");

  const homepageEntries = await fetchAllEntriesForContentType("homepage");

  const homepage = homepageEntries
    .map(i => mapHomepage(i))[0]; // we expect exactly one homepage entry
  //console.log(`*** Mapped homepage: ${JSON.stringify(homepage)}`);

  console.log(`... fetched homepage.`);
  return homepage;
};
