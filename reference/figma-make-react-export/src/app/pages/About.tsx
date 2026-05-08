import { ArrowRight, Building2, Users, Trophy, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const poolSurface =
  "https://images.unsplash.com/photo-1769490315056-fd1bb6832239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB3YXRlciUyMHN1cmZhY2UlMjBibHVlfGVufDF8fHx8MTc3NDQ2MDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080";

const squadImage =
  "https://images.unsplash.com/photo-1621354559364-b7404d160bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltJTIwdGVhbSUyMHRyYWluaW5nJTIwY29hY2glMjBwb29sc2lkZXxlbnwxfHx8fDE3NzQ0NjA5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We are a non-profit club rooted in the Cannock community. Every penny we raise goes back into supporting our swimmers.",
  },
  {
    icon: Users,
    title: "Inclusive & Welcoming",
    description:
      "From complete beginners to competitive athletes, every swimmer is valued here. We make swimming accessible for all.",
  },
  {
    icon: Trophy,
    title: "Passion & Ambition",
    description:
      "We instil a lifelong love of the water and push every swimmer to achieve their personal best — from a first width to competing at regional level.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Building2}
        accentColor="#db2777"
        title="About Cannock Phoenix"
        subtitle="Over 45 years of nurturing swimmers, building community and rising to the challenge — just like a phoenix."
        backgroundImage={poolSurface}
      />

      {/* History */}
      <SectionLayout>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Est. 1980
              </span>
              <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.2 }}>
                45 years in the water
              </h2>
              <p className="mt-4 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Cannock Phoenix Swimming Club was founded in 1980 by a group of local parents and swimming enthusiasts
                who believed every child in Staffordshire deserved access to quality swimming tuition and the opportunity
                to compete.
              </p>
              <p className="mt-3 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                For over four decades, we've proudly operated as a non-profit club. That means everything we do —
                every session, every gala entry, every coaching programme — is driven purely by our passion for
                swimming and our commitment to the young people of Staffordshire.
              </p>
              <p className="mt-3 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Today, with 50+ members and a dedicated team of coaches and volunteers, we're stronger than ever —
                and we're just getting started.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={poolSurface} alt="Club swimming pool" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                What We Stand For
              </span>
              <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Our Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-[#f5f8fc] rounded-2xl p-7 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0d2240]/5 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-[#cc1e1e]" />
                    </div>
                    <h3 className="text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team / coaches */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-2 lg:order-1">
              <img src={squadImage} alt="Coaches and team" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Our People
              </span>
              <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Coaches, volunteers & committee
              </h2>
              <p className="mt-4 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                The club is run entirely by volunteers — from our qualified swim coaches to our committee members,
                timekeepers, fundraisers and poolside marshals. Every single person gives their time freely because
                they believe in what we do.
              </p>
              <p className="mt-3 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Our coaches hold ASA/Swim England qualifications and are committed to ongoing development to provide
                the best possible experience for every swimmer in our care.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Link
                  to="/fundraising"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  Get Involved <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-pages */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Find Out More
              </span>
              <h2 className="mt-1 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
                More from About
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/about/committee"
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#0d2240]/10 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                    Club Committee
                  </p>
                  <p className="mt-1 text-[#0d2240]/55 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    Meet the volunteers who govern and run Cannock Phoenix.
                  </p>
                </div>
                <ChevronRight size={18} className="text-[#cc1e1e] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </SectionLayout>

      {/* CTA */}
      <section className="bg-[#0d2240] py-16 text-center">
        <h2 className="text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
          Join the Phoenix family
        </h2>
        <p className="text-white/60 mb-6 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          We'd love to welcome your child to the club. Come along for a free trial and see what we're all about.
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