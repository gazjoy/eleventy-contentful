const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapStaffMember } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching staff members from Contentful...");

  const staffMemberEntries = await fetchAllEntriesForContentType("staffMember");

  const staffMembers = staffMemberEntries
    .map(i => mapStaffMember(i))
    .sort((a, b) => a.name.localeCompare(b.name)); // sort by name alphabetically
  //console.log(`*** Mapped, sorted staff members: ${JSON.stringify(staffMembers)}`);

  console.log(`... done. ${staffMembers.length} staff members fetched.`);
  return staffMembers;
};
