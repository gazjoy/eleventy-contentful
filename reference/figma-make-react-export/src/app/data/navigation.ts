import { GraduationCap, Trophy, Building2, CalendarDays, Key, UserPlus, Newspaper } from "lucide-react";

export interface NavPage {
  label: string;
  to: string;
  description: string;
  badge?: "new" | "coming-soon";
}

export interface NavSection {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  pages: NavPage[];
}

export const navSections: NavSection[] = [
  {
    id: "learn",
    label: "Learn",
    description: "Learn to swim with us",
    icon: GraduationCap,
    accentColor: "#0891b2",
    pages: [
      { label: "Learn to Swim", to: "/learn-to-swim", description: "Our Swim England programme — Stages 1 to 7" },
      { label: "Teachers", to: "/teachers", description: "Our qualified teaching staff" },
      { label: "Timetable & Locations", to: "/learn/timetable", description: "Learn to Swim session times and pool locations" },
    ],
  },
  {
    id: "compete",
    label: "Compete",
    description: "Train and compete with us",
    icon: Trophy,
    accentColor: "#ea580c",
    pages: [
      { label: "Competitive Squads", to: "/competitive-squad", description: "Development and county-level training" },
      { label: "Masters", to: "/masters", description: "Adult competitive swimming for 18+", badge: "new" },
      { label: "Coaches", to: "/coaches", description: "Our competitive squad coaching team" },
      { label: "Timetable & Locations", to: "/timetable", description: "Squad session times and pool locations" },
    ],
  },
  {
    id: "club",
    label: "Our Club",
    description: "Who we are",
    icon: Building2,
    accentColor: "#db2777",
    pages: [
      { label: "About", to: "/about", description: "Our story, values, and mission" },
      { label: "History", to: "/history", description: "Over 45 years of competitive swimming" },
      { label: "Contact", to: "/contact", description: "Get in touch with the right person" },
      { label: "Committee", to: "/about/committee", description: "Elected officers and volunteers" },
      { label: "Welfare & Concerns", to: "/welfare", description: "Welfare officers and raising a safeguarding concern" },
      { label: "Club Policies", to: "/club-policies", description: "Safeguarding, codes of conduct, GDPR and privacy" },
      { label: "Fundraising & Sponsorship", to: "/fundraising", description: "Support the club and get involved" },
      { label: "Volunteering", to: "/volunteering", description: "Give your time and make a difference" },
    ],
  },
  {
    id: "events",
    label: "Club Events",
    description: "Galas, meets and results",
    icon: CalendarDays,
    accentColor: "#16a34a",
    pages: [
      { label: "Events & Galas", to: "/events", description: "Upcoming galas, open meets and club nights" },
      { label: "Results", to: "/results", description: "Recent competition and gala results", badge: "new" },
    ],
  },
  {
    id: "members",
    label: "Members",
    description: "For current members",
    icon: Key,
    accentColor: "#ca8a04",
    pages: [
      { label: "Pay Fees", to: "/payments", description: "Set up Direct Debit via GoCardless" },
      { label: "Resources", to: "/resources", description: "Downloads, documents and useful links", badge: "new" },
      { label: "Swim Manager", to: "/swim-manager", description: "Log in to your squad account", badge: "new" },
    ],
  },
  {
    id: "join",
    label: "Join Phoenix",
    description: "Become a member",
    icon: UserPlus,
    accentColor: "#0891b2",
    pages: [
      { label: "Request a Trial", to: "/join", description: "Book your free taster session" },
      { label: "FAQs", to: "/faqs", description: "Common questions answered" },
      { label: "Membership Fees", to: "/membership-fees", description: "Transparent pricing for all programmes" },
    ],
  },
];

/** Returns the section a given pathname belongs to, or null for Home/News. */
export function getSectionByPath(pathname: string): NavSection | null {
  for (const section of navSections) {
    for (const page of section.pages) {
      if (pathname === page.to || pathname.startsWith(page.to + "/")) {
        return section;
      }
    }
  }
  return null;
}

/** News is a standalone top-level link (not a section with sub-pages). */
export const newsLink = { label: "Club News", to: "/news", icon: Newspaper };