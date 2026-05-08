import { Trophy } from "lucide-react";
import { TimetableView } from "../components/TimetableView";
import { competeSessions, venuesForGroups, COMPETE_GROUPS } from "../data/timetableData";

const competeVenues = venuesForGroups(COMPETE_GROUPS);

export default function Timetable() {
  return (
    <TimetableView
      sessions={competeSessions}
      venues={competeVenues}
      sectionLabel="Compete"
      SectionIcon={Trophy}
      accentColor="#ea580c"
      title="Timetable & Locations"
      subtitle="Competitive squad sessions run across four venues in Staffordshire. Times are correct for the current season and may change during school holidays."
      infoText="Always confirm your child's session time and venue with the coaching team before attending for the first time. Some sessions may not run during school holidays — members are notified via Swim Manager."
    />
  );
}