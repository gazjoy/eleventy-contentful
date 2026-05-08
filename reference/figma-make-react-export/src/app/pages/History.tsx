import { Building2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionLayout } from "../components/SectionLayout";

const milestones = [
  {
    year: "1980",
    title: "Founded",
    body: "A small group of local parents and swimming enthusiasts formed Cannock Phoenix Swimming Club, believing every child in Staffordshire deserved quality tuition and the chance to compete.",
  },
  {
    year: "1985",
    title: "First County Championships",
    body: "The club sent its first swimmers to Staffordshire County Championships — two juniors qualified in backstroke and breaststroke, beginning a proud tradition of county representation.",
  },
  {
    year: "1993",
    title: "Learn to Swim Programme Launched",
    body: "Responding to community need, CPSC launched a structured Learn to Swim programme aligned with the ASA national curriculum, opening swimming to hundreds more children in Cannock.",
  },
  {
    year: "2001",
    title: "Swim 21 Accreditation",
    body: "The club achieved Swim England's prestigious Swim 21 Club Accreditation, recognising high standards in coaching, governance, and swimmer welfare.",
  },
  {
    year: "2009",
    title: "Cannock Chase Leisure Centre Home",
    body: "CPSC established its permanent home at Cannock Chase Leisure Centre, providing consistent access to a modern eight-lane pool for both competitive training and lessons.",
  },
  {
    year: "2015",
    title: "Junior Regional Finalists",
    body: "For the first time, a CPSC swimmer reached a Midlands Regional final — a landmark moment that raised the club's ambitions and validated its long-term development approach.",
  },
  {
    year: "2023",
    title: "50+ Active Members",
    body: "The club reached a milestone of over 50 active members across all programmes — a testament to the dedication of coaches, teachers, volunteers, and the wider club family.",
  },
  {
    year: "2025",
    title: "45 Years & Still Rising",
    body: "As the club celebrates its 45th anniversary, Cannock Phoenix continues to grow — with plans for a new Masters section, a modernised website, and greater ambitions than ever before.",
  },
];

export default function History() {
  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Building2}
        accentColor="#db2777"
        title="Our History"
        subtitle="45 years of nurturing swimmers, building community, and rising to the challenge — just like a phoenix."
      />
      <SectionLayout>
        <section className="py-14 px-4 sm:px-6 lg:px-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="sm:pl-14 relative">
                  {/* Year bubble */}
                  <div
                    className="hidden sm:flex absolute left-0 w-8 h-8 rounded-full bg-[#0d2240] text-white items-center justify-center shrink-0 top-0.5"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.6rem" }}
                  >
                    {m.year.slice(2)}
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-[#cc1e1e] text-xs font-semibold uppercase tracking-widest"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {m.year}
                      </span>
                    </div>
                    <h3
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="mt-2 text-[#0d2240]/65 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}