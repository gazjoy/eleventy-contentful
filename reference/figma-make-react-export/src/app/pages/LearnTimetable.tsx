import { GraduationCap } from "lucide-react";
import { TimetableView } from "../components/TimetableView";
import { learnSessions, venuesForGroups, LEARN_GROUPS } from "../data/timetableData";

const learnVenues = venuesForGroups(LEARN_GROUPS);

export default function LearnTimetable() {
  return (
    <TimetableView
      sessions={learnSessions}
      venues={learnVenues}
      sectionLabel="Learn"
      SectionIcon={GraduationCap}
      accentColor="#0891b2"
      title="Timetable & Locations"
      subtitle="Learn to Swim sessions run across two local venues. All sessions are term-time and may vary during school holidays."
      infoText="Always confirm your child's session time and venue with our Head Teacher before attending for the first time. Sessions may not run during school holidays — parents are notified by email in advance."
    />
  );
}