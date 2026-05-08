import { ArrowRight, Waves } from "lucide-react";
import { Link } from "react-router";
import { PaymentNudge } from "../components/PaymentNudge";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const raceImage =
  "https://images.unsplash.com/photo-1686323955670-0bde6a3aba73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHJhY2UlMjBjb21wZXRpdGlvbiUyMGxhbmVzfGVufDF8fHx8MTc3NDQ2MDk1OXww&ixlib=rb-4.1.0&q=80&w=1080";

const groups = [
  {
    name: "Pre-Squad",
    age: "8–11 yrs",
    sessions: "2–3x per week",
    desc: "For swimmers who have completed our Learn to Swim pathway and are ready to begin competitive training. Focus on technique, stamina and introducing galas.",
    highlights: ["All 4 strokes", "Club gala entries", "Technique focus", "Building race confidence"],
  },
  {
    name: "Junior Squad",
    age: "10–14 yrs",
    sessions: "3–4x per week",
    desc: "Our core competitive group. Swimmers train intensively on technique and race fitness, competing at regional galas and working towards qualifying times.",
    highlights: ["Regional gala entries", "Personal best tracking", "Dry land conditioning", "Video analysis"],
  },
  {
    name: "Senior Squad",
    age: "13+ yrs",
    sessions: "5x per week",
    desc: "For our most advanced swimmers with ambitions at county level and beyond. High-volume training, advanced race tactics and pathway to Swim England competitions.",
    highlights: ["County & national events", "Strength & conditioning", "Mental performance", "Talent pathway"],
  },
];

// ── Timetable ────────────────────────────────────────────────────────────────

const ORDERED_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

const SQUAD_COLORS: Record<string, string> = {
  "Pre-Squad":    "#0ea5e9",
  "Junior Squad": "#0d2240",
  "Senior Squad": "#cc1e1e",
};

interface TimetableSession {
  squad: "Pre-Squad" | "Junior Squad" | "Senior Squad";
  day: string;
  time: string;
  venue: string;
  type: "pool" | "land";
}

const timetable: TimetableSession[] = [
  // Pre-Squad
  { squad: "Pre-Squad",    day: "Monday",    time: "6:00 – 7:30pm",   venue: "Cheslyn Hay Leisure Centre", type: "pool" },
  { squad: "Pre-Squad",    day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre",     type: "pool" },
  { squad: "Pre-Squad",    day: "Thursday",  time: "7:15 – 8:15pm",   venue: "Cannock Leisure Centre",     type: "pool" },
  // Junior Squad
  { squad: "Junior Squad", day: "Monday",    time: "6:00 – 7:30pm",   venue: "Cheslyn Hay Leisure Centre", type: "pool" },
  { squad: "Junior Squad", day: "Tuesday",   time: "7:00 – 7:45pm",   venue: "Cannock Leisure Centre",     type: "land" },
  { squad: "Junior Squad", day: "Tuesday",   time: "8:00 – 9:00pm",   venue: "Cannock Leisure Centre",     type: "pool" },
  { squad: "Junior Squad", day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre",     type: "pool" },
  { squad: "Junior Squad", day: "Thursday",  time: "7:00 – 8:30pm",   venue: "Cannock Leisure Centre",     type: "pool" },
  { squad: "Junior Squad", day: "Sunday",    time: "10:20 – 11:20am", venue: "Cannock Leisure Centre",     type: "pool" },
  // Senior Squad
  { squad: "Senior Squad", day: "Monday",    time: "6:00 – 7:30pm",   venue: "Cheslyn Hay Leisure Centre", type: "pool" },
  { squad: "Senior Squad", day: "Tuesday",   time: "7:00 – 7:45pm",   venue: "Cannock Leisure Centre",     type: "land" },
  { squad: "Senior Squad", day: "Tuesday",   time: "8:00 – 9:00pm",   venue: "Cannock Leisure Centre",     type: "pool" },
  { squad: "Senior Squad", day: "Wednesday", time: "7:10 – 8:40pm",   venue: "Rugeley Leisure Centre",     type: "pool" },
  { squad: "Senior Squad", day: "Thursday",  time: "7:00 – 8:30pm",   venue: "Cannock Leisure Centre",     type: "pool" },
  { squad: "Senior Squad", day: "Friday",    time: "7:45 – 9:45pm",   venue: "Bloxwich Leisure Centre",    type: "pool" },
  { squad: "Senior Squad", day: "Sunday",    time: "10:20 – 11:20am", venue: "Cannock Leisure Centre",     type: "pool" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function CompetitiveSquad() {
  return (
    <div>
      <PageHero
        sectionLabel="Compete"
        SectionIcon={Waves}
        accentColor="#ea580c"
        title="Competitive Squad"
        subtitle="From first galas to county competitions — our squads give ambitious young swimmers the training, support and opportunities to achieve their best."
        backgroundImage={raceImage}
      />

      {/* Body sections */}
      <SectionLayout>
        {/* ── Find your squad ───────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Squad Structure
              </span>
              <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Find your squad
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {groups.map((g, i) => (
                <div
                  key={g.name}
                  className={`rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow ${i === 1 ? "bg-[#0d2240] text-white ring-2 ring-[#cc1e1e]" : "bg-white border border-gray-100"}`}
                >
                  <div className={`px-6 py-5 border-b ${i === 1 ? "border-white/10" : "border-gray-100"}`}>
                    <h3 className={`${i === 1 ? "text-white" : "text-[#0d2240]"}`} style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}>
                      {g.name}
                    </h3>
                    <div className={`mt-1 flex gap-3 text-xs ${i === 1 ? "text-white/60" : "text-[#0d2240]/50"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                      <span>{g.age}</span>
                      <span>·</span>
                      <span>{g.sessions}</span>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/70" : "text-[#0d2240]/65"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                      {g.desc}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {g.highlights.map((h) => (
                        <li key={h} className={`flex items-center gap-2 text-sm ${i === 1 ? "text-white/80" : "text-[#0d2240]/70"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cc1e1e] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment nudge */}
        <PaymentNudge context="competitive squad monthly fees" />
      </SectionLayout>

      {/* CTA */}
      <section className="bg-[#0d2240] py-16 text-center">
        <h2 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
          Ready to race?
        </h2>
        <p className="text-white/60 mb-6 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          Think your swimmer is ready for the squad? Get in touch and we'll arrange a trial session with one of our coaches.
        </p>
        <Link
          to="/join"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full transition-colors"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          Request a Trial <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}