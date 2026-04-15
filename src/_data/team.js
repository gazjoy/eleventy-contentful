const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapTeamMember } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching team members from Contentful...");

  const teamMemberEntries = await fetchAllEntriesForContentType("teamMember");

  const teamMembers = teamMemberEntries
    .map(i => mapTeamMember(i))
    .sort((a, b) => a.name.localeCompare(b.name)); // sort by name alphabetically
  //console.log(`*** Mapped, sorted team members: ${JSON.stringify(teamMembers)}`);

  console.log(`... done. ${teamMembers.length} team members fetched.`);
  return teamMembers;
};
