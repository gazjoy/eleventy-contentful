/*
  Builds lookup maps for content links. This allows us to easily resolve 
  links to pages and locations when rendering rich text fields.
*/

const getLocations = require("./locations");
const getPages = require("./pages");
const getTeam = require("./team");

module.exports = async function () {
  const [locations, pagesData, teamMembers] = await Promise.all([
    getLocations(),
    getPages(),
    getTeam()
  ]);

  const data = {
    locations: new Map(locations.map(l => [l.id, {
      name: l.name,
      website: l.website
    }])),

    pages: new Map(pagesData.flatList.map(p => [p.id, {
      title: p.title,
      urlPath: p.urlPath
    }])),

    teamMembers: new Map(teamMembers.map(t => [t.id, {
      name: t.name,
      email: t.email
    }])),
  };

  // console.log(`*** Content link lookups: ${JSON.stringify({
  //   pages: Object.fromEntries(data.pages),
  //   locations: Object.fromEntries(data.locations)
  // })}`);

  return data;
};