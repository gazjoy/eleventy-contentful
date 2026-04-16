/*
  Builds lookup maps for content links. This allows us to easily resolve 
  links to pages and venues when rendering rich text fields (see richTextRenderer.js).
*/

const getVenues = require("./venues");
const getPages = require("./pages");
const getStaff = require("./staff");

module.exports = async function () {
  const [pagesData, staffMembers, venues] = await Promise.all([
    getPages(),
    getStaff(),
    getVenues(),
  ]);

  const data = {
    pages: new Map(pagesData.flatList.map(p => [p.id, {
      title: p.title,
      urlPath: p.urlPath
    }])),

    staffMembers: new Map(staffMembers.map(t => [t.id, {
      name: t.name,
      role: t.role,
    }])),

    venues: new Map(venues.map(v => [v.id, {
      name: v.name,
      website: v.website
    }])),
  };

  // console.log(`*** Content link lookups: ${JSON.stringify({
  //   pages: Object.fromEntries(data.pages),
  //   staffMembers: Object.fromEntries(data.staffMembers),
  //   venues: Object.fromEntries(data.venues)
  // })}`);

  return data;
};