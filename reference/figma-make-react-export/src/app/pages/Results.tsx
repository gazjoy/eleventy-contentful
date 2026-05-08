import { CalendarDays, ExternalLink, Trophy, Calendar } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const recentResults = [
  {
    meet: "Staffordshire County Championships",
    date: "March 2025",
    highlights: [
      "4 finalists across 100m Freestyle, 200m IM, 50m Backstroke, and 100m Butterfly",
      "Two personal bests set in the 200m Breaststroke finals",
      "Emily R. placed 3rd in Girls 11–12 100m Freestyle",
    ],
  },
  {
    meet: "Storm Trident Open Meet 2025",
    date: "January 2025",
    highlights: [
      "51 entries across all age groups",
      "12 personal bests recorded on the day",
      "CPSC swimmers competed across 14 events",
    ],
  },
  {
    meet: "Midland Region Junior Championships",
    date: "November 2024",
    highlights: [
      "First CPSC swimmer to qualify for a Midland Regional final in breaststroke",
      "Squad achieved 8 personal bests across the two-day meet",
    ],
  },
];

export default function Results() {
  return (
    <div>
      <PageHero
        sectionLabel="Club Events"
        SectionIcon={CalendarDays}
        accentColor="#16a34a"
        title="Results"
        subtitle="Recent competition highlights and performance results from our competitive swimmers."
      />
      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          {/* Swim England results link */}
          <a
            href="https://www.swimmingresults.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#0d2240] text-white rounded-2xl px-6 py-5 mb-10 hover:bg-[#1a3a5c] transition-colors"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <ExternalLink size={18} className="text-white" />
            </div>
            <div>
              <p
                className="text-white"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Official Swim England Results System
              </p>
              <p
                className="text-white/55 text-xs mt-0.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Search full time histories and rankings at swimmingresults.org →
              </p>
            </div>
          </a>

          <h2
            className="text-[#0d2240] mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}
          >
            Recent meet highlights
          </h2>

          <div className="space-y-5">
            {recentResults.map((r) => (
              <div
                key={r.meet}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Trophy size={16} className="text-[#cc1e1e]" />
                    </div>
                    <div>
                      <p
                        className="text-[#0d2240]"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                      >
                        {r.meet}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Calendar size={11} className="text-[#0d2240]/35" />
                        <span
                          className="text-[#0d2240]/45 text-xs"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {r.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc1e1e] shrink-0 mt-1.5" />
                      <span
                        className="text-[#0d2240]/65 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p
            className="mt-6 text-[#0d2240]/40 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Results shown are illustrative. Full verified times available on the Swim England results system.
          </p>
        </section>
      </SectionLayout>
    </div>
  );
}