const { fetchAllEntriesForContentType } = require("../lib/contentful/paginationHelper");
const { mapSession, mapSquad } = require("../lib/contentful/contentMapper");

module.exports = async function () {
  console.log("Fetching squads and sessions from Contentful...");

  const squadEntries = await fetchAllEntriesForContentType("squad");
  const sessionEntries = await fetchAllEntriesForContentType("session");

  const sessions = sessionEntries
    .map((i) => mapSession(i));
  //console.log(`*** Mapped sessions: ${JSON.stringify(sessions)}`);

  const squads = squadEntries
    .map((i) => mapSquad(i))
    .sort((a, b) => a.name.localeCompare(b.name)) // sort by name alphabetically
    .map((squad) => {
      squad.timetable = buildTimetableForSquad(sessions, squad);
      return squad;
    });
  //console.log(`*** Mapped, sorted squads with timetables: ${JSON.stringify(squads)}`);

  console.log(`... fetched ${squads.length} squads and ${sessions.length} sessions.`);

  return squads;
};

const buildTimetableForSquad = (sessions, squad) => {
  const daysInOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const timetable = {};

  for (const day of daysInOrder) {
    const sessionsForDay = sessions.filter(session => 
      session.day === day && 
      session.squadsIds.includes(squad.id)
    );

    timetable[day] = sessionsForDay?.sort((a, b) => a.startTime.localeCompare(b.startTime)) || []; 
  }

  return timetable;
};

