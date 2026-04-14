/*
  Builds lookup maps for content links. This allows us to easily resolve 
  links to pages and locations when rendering rich text fields.
*/

const getPages = require("./pages");
const getLocations = require("./locations");

module.exports = async function () {
  const [pagesData, locations] = await Promise.all([
    getPages(),
    getLocations()
  ]);

  const data = {
    pages: new Map(pagesData.flatList.map(p => [p.id, {
      title: p.title,
      urlPath: p.urlPath
    }])),

    locations: new Map(locations.map(l => [l.id, {
      name: l.name,
      website: l.website
    }])),
  };

  // console.log(`*** Content link lookups: ${JSON.stringify({
  //   pages: Object.fromEntries(data.pages),
  //   locations: Object.fromEntries(data.locations)
  // })}`);

  return data;
};