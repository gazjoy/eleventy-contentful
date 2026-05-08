// ── Types ──────────────────────────────────────────────────────────────────
export type Session = {
  day: string;
  time: string;
  group: string;
  venue: string;
  land?: boolean;
};

export type Venue = {
  name: string;
  slug: string;
  address: string;
  squads: string[];
  mapSrc: string;
};

// ── All sessions ───────────────────────────────────────────────────────────
export const ALL_SESSIONS: Session[] = [
  // Learn to Swim
  { group: "Learn to Swim", day: "Monday",   time: "5:00 – 6:00pm",   venue: "Cheslyn Hay Leisure Centre" },
  { group: "Learn to Swim", day: "Thursday", time: "5:00 – 6:00pm",   venue: "Cheslyn Hay Leisure Centre" },
  { group: "Learn to Swim", day: "Saturday", time: "1:00 – 3:00pm",   venue: "Great Wyrley High School" },

  // Pre-Squad
  { group: "Pre-Squad", day: "Monday",    time: "6:00 – 7:30pm",  venue: "Cheslyn Hay Leisure Centre" },
  { group: "Pre-Squad", day: "Wednesday", time: "7:10 – 8:40pm",  venue: "Rugeley Leisure Centre" },
  { group: "Pre-Squad", day: "Thursday",  time: "7:15 – 8:15pm",  venue: "Cannock Leisure Centre" },

  // Junior Squad
  { group: "Junior Squad", day: "Monday",    time: "6:00 – 7:30pm",   venue: "Cheslyn Hay Leisure Centre" },
  { group: "Junior Squad", day: "Tuesday",   time: "7:00 – 7:45pm",   venue: "Cannock Leisure Centre", land: true },
  { group: "Junior Squad", day: "Tuesday",   time: "8:00 – 9:00pm",   venue: "Cannock Leisure Centre" },
  { group: "Junior Squad", day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre" },
  { group: "Junior Squad", day: "Thursday",  time: "7:00 – 8:30pm",   venue: "Cannock Leisure Centre" },
  { group: "Junior Squad", day: "Sunday",    time: "10:20 – 11:20am", venue: "Cannock Leisure Centre" },

  // Senior Squad
  { group: "Senior Squad", day: "Monday",    time: "6:00 – 7:30pm",   venue: "Cheslyn Hay Leisure Centre" },
  { group: "Senior Squad", day: "Tuesday",   time: "7:00 – 7:45pm",   venue: "Cannock Leisure Centre", land: true },
  { group: "Senior Squad", day: "Tuesday",   time: "8:00 – 9:00pm",   venue: "Cannock Leisure Centre" },
  { group: "Senior Squad", day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre" },
  { group: "Senior Squad", day: "Thursday",  time: "7:00 – 8:30pm",   venue: "Cannock Leisure Centre" },
  { group: "Senior Squad", day: "Friday",    time: "7:45 – 9:45pm",   venue: "Bloxwich Leisure Centre" },
  { group: "Senior Squad", day: "Sunday",    time: "10:20 – 11:20am", venue: "Cannock Leisure Centre" },

  // Masters
  { group: "Masters", day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre" },
  { group: "Masters", day: "Sunday",    time: "10:20 – 11:20am", venue: "Cannock Leisure Centre" },
];

// ── All venues ─────────────────────────────────────────────────────────────
export const ALL_VENUES: Venue[] = [
  {
    name: "Cheslyn Hay Leisure Centre",
    slug: "cheslyn-hay-leisure-centre",
    address: "School Road, Cheslyn Hay, WS6 7JB",
    squads: ["Learn to Swim", "Pre-Squad", "Junior Squad", "Senior Squad"],
    mapSrc: "https://maps.google.com/maps?q=Cheslyn+Hay+Leisure+Centre,+School+Road,+Cheslyn+Hay+WS6+7JB&output=embed",
  },
  {
    name: "Cannock Leisure Centre",
    slug: "cannock-leisure-centre",
    address: "Uxbridge Street, Cannock, WS11 0DY",
    squads: ["Pre-Squad", "Junior Squad", "Senior Squad", "Masters"],
    mapSrc: "https://maps.google.com/maps?q=Cannock+Leisure+Centre,+Uxbridge+Street,+Cannock+WS11+0DY&output=embed",
  },
  {
    name: "Rugeley Leisure Centre",
    slug: "rugeley-leisure-centre",
    address: "Burnthill Lane, Rugeley, WS15 2HY",
    squads: ["Pre-Squad", "Junior Squad", "Senior Squad", "Masters"],
    mapSrc: "https://maps.google.com/maps?q=Rugeley+Leisure+Centre,+Burnthill+Lane,+Rugeley+WS15+2HY&output=embed",
  },
  {
    name: "Great Wyrley High School",
    slug: "great-wyrley-high-school",
    address: "Hazel Lane, Great Wyrley, WS6 6LH",
    squads: ["Learn to Swim"],
    mapSrc: "https://maps.google.com/maps?q=Great+Wyrley+High+School,+Hazel+Lane,+Great+Wyrley+WS6+6LH&output=embed",
  },
  {
    name: "Bloxwich Leisure Centre",
    slug: "bloxwich-leisure-centre",
    address: "Leamore Lane, Bloxwich, WS3 2EJ",
    squads: ["Senior Squad"],
    mapSrc: "https://maps.google.com/maps?q=Bloxwich+Leisure+Centre,+Leamore+Lane,+Bloxwich+WS3+2EJ&output=embed",
  },
];

// ── Squad colour palette ───────────────────────────────────────────────────
export const SQUAD_COLOR: Record<string, { bg: string; text: string; border: string }> = {
  "Learn to Swim": { bg: "#e0f2fe", text: "#0369a1", border: "#bae6fd" },
  "Pre-Squad":     { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
  "Junior Squad":  { bg: "#e8edf5", text: "#0d2240", border: "#c7d2e8" },
  "Senior Squad":  { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" },
  "Masters":       { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0" },
};

// ── Day ordering ───────────────────────────────────────────────────────────
export const DAY_ORDER = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];

// ── Helpers ────────────────────────────────────────────────────────────────
export const LEARN_GROUPS = ["Learn to Swim"];
export const COMPETE_GROUPS = ["Pre-Squad", "Junior Squad", "Senior Squad", "Masters"];

export const learnSessions  = ALL_SESSIONS.filter((s) => LEARN_GROUPS.includes(s.group));
export const competeSessions = ALL_SESSIONS.filter((s) => COMPETE_GROUPS.includes(s.group));

/** Venues relevant to a given set of groups */
export function venuesForGroups(groups: string[]): Venue[] {
  return ALL_VENUES.filter((v) => v.squads.some((sq) => groups.includes(sq)));
}

/** Venue name → anchor slug */
export function venueSlug(name: string): string {
  return ALL_VENUES.find((v) => v.name === name)?.slug ?? name.toLowerCase().replace(/\s+/g, "-");
}
