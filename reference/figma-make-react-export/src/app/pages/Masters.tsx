import { Trophy, Users, Clock, ArrowRight, Waves } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const ageGroups = [
  { group: "18–24", label: "Senior" },
  { group: "25–29", label: "Masters" },
  { group: "30–34", label: "Masters" },
  { group: "35–39", label: "Masters" },
  { group: "40–44", label: "Masters" },
  { group: "45–49", label: "Masters" },
  { group: "50–54", label: "Masters" },
  { group: "55+", label: "Masters" },
];

const benefits = [
  { icon: Trophy, title: "Compete at any age", body: "Masters events are held at regional, national, and international level with age-group categories from 18 to 80+." },
  { icon: Users, title: "A welcoming community", body: "Whether you swam competitively as a junior or are returning to the pool after years away, you'll find a warm welcome." },
  { icon: Clock, title: "Flexible training", body: "Sessions are structured to fit around work and family commitments, with both morning and evening options." },
];

export default function Masters() {
  return (
    <div>
      <PageHero
        sectionLabel="Compete"
        SectionIcon={Waves}
        accentColor="#ea580c"
        title="Masters Swimming"
        subtitle="Competitive adult swimming for all abilities. Whether you're 18 or 80, there's a lane and a lane-mate for you at Cannock Phoenix."
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
          <span className="text-emerald-300 text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            Coming Soon — Launching 2026
          </span>
        </div>
      </PageHero>

      <SectionLayout>
        {/* What is Masters */}
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <h2
            className="text-[#0d2240] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.25rem" }}
          >
            What is Masters swimming?
          </h2>
          <p
            className="text-[#0d2240]/65 text-sm leading-relaxed max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Masters swimming is competitive swimming for adults aged 18 and over, organised
            through Swim England and British Masters Swimming. Races are split into five-year
            age bands, so you always compete against swimmers your own age. It's a welcoming,
            social, and surprisingly competitive world.
          </p>
          <p
            className="mt-3 text-[#0d2240]/65 text-sm leading-relaxed max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Cannock Phoenix is launching its Masters section in 2025. We're looking for adult
            swimmers of all abilities — from complete returners to seasoned veterans — to join
            our founding group.
          </p>
        </section>

        {/* Benefits */}
        <section className="py-8 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <div className="grid sm:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center mb-3">
                  <b.icon size={17} className="text-[#cc1e1e]" />
                </div>
                <p
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                >
                  {b.title}
                </p>
                <p
                  className="mt-1.5 text-[#0d2240]/55 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Age groups */}
        <section className="py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <h2
            className="text-[#0d2240] mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}
          >
            Age groups
          </h2>
          <div className="flex flex-wrap gap-2">
            {ageGroups.map((a) => (
              <div
                key={a.group}
                className="px-4 py-2 bg-[#0d2240]/5 rounded-xl text-sm"
              >
                <span
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {a.group}
                </span>
              </div>
            ))}
          </div>
          <p
            className="mt-4 text-[#0d2240]/45 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ages based on the swimmer's age on 31 December of the current year, per Swim England Masters rules.
          </p>
        </section>

        {/* CTA */}
        <section className="py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <div className="bg-[#0d2240] rounded-2xl p-7 text-white">
            <h3
              className="text-white"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}
            >
              Interested in joining Masters?
            </h3>
            <p
              className="mt-2 text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Drop us a line and we'll add you to the founding members list. You'll be
              the first to know when sessions begin.
            </p>
            <a
              href="mailto:info@cannockphoenixsc.org?subject=Masters%20Swimming%20Enquiry"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Express your interest
              <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}