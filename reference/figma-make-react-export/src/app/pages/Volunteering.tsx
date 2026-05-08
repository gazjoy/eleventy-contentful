import { ArrowRight, Clock, ClipboardList, Users, Wrench, HandHeart, ShieldCheck, Star } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const volunteerImage =
  "https://images.unsplash.com/photo-1774557937014-7bb9ffcd2469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzcG9ydHMlMjB2b2x1bnRlZXJzJTIwaGVscGluZyUyMGV2ZW50fGVufDF8fHx8MTc3NzY0OTU3OXww&ixlib=rb-4.1.0&q=80&w=1080";

const roles = [
  {
    icon: Clock,
    title: "Official",
    commitment: "Gala days",
    desc: "Operate the timing systems at galas — no experience needed, full training provided by Swim England. One of the most vital roles at any competition, and a great way to see the sport up close.",
  },
  {
    icon: ShieldCheck,
    title: "Committee Member",
    commitment: "Monthly meetings",
    desc: "Help steer the club as a trustee or committee member. Roles include Chair, Secretary, Treasurer and general members. A fantastic opportunity to shape the direction of the club.",
  },
  {
    icon: ClipboardList,
    title: "Team Manager",
    commitment: "Gala days",
    desc: "Co-ordinate entries, warm-ups and event running order at home and away galas. Great for organised people who enjoy a busy day and thrive on keeping things running smoothly.",
  },
  {
    icon: Wrench,
    title: "General Helper",
    commitment: "Ad hoc",
    desc: "From setting up pool lanes to running the tuck shop — there's always something that needs doing. Any amount of time is hugely appreciated and no prior experience is needed.",
  },
];

const whyItems = [
  {
    icon: HandHeart,
    heading: "No paid staff",
    body: "Cannock Phoenix is a registered non-profit with no paid employees. Every gala, every session, every swimmer's progress is made possible entirely by volunteers.",
  },
  {
    icon: Star,
    heading: "Rewarding & social",
    body: "You'll be part of a passionate community, watch young people develop, and know that your time directly improves opportunities for every child in the club.",
  },
  {
    icon: Users,
    heading: "Training & support given",
    body: "You don't need to arrive with any specific skills. The club and Swim England provide all the training you need — whether that's timing systems, safeguarding, or committee governance.",
  },
];

export default function Volunteering() {
  return (
    <div>
      <PageHero
        sectionLabel="Get Involved"
        SectionIcon={HandHeart}
        accentColor="#db2777"
        title="Volunteering"
        subtitle="Cannock Phoenix runs entirely on the goodwill of its volunteers. Whether you have an hour or a day, every bit of help makes a real difference."
        backgroundImage={volunteerImage}
      />

      <SectionLayout>
        {/* ── Why it matters ────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <span
              className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Why it matters
            </span>
            <h2
              className="mt-2 text-[#0d2240]"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.2,
              }}
            >
              The club can't run without you
            </h2>
            <p
              className="mt-4 text-[#0d2240]/70 leading-relaxed max-w-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              As a registered non-profit, Cannock Phoenix has no paid staff. Every gala that runs,
              every session that happens, every swimmer that progresses is made possible by the
              volunteers who give their time. Many of our most committed volunteers are parents who
              started by simply helping at their child's first gala — and never looked back!
            </p>

            {/* Three feature cards */}
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {whyItems.map((w) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.heading}
                    className="bg-[#f5f8fc] rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#cc1e1e]" />
                    </div>
                    <p
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                    >
                      {w.heading}
                    </p>
                    <p
                      className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {w.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Volunteering roles ────────────────────────────────────── */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ways to help
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                Volunteering roles
              </h2>
              <p
                className="mt-3 text-[#0d2240]/60 max-w-xl text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Whether you can commit to a regular role or just want to help out occasionally,
                there's a place for you at Cannock Phoenix. No experience is necessary for most roles
                — just enthusiasm and a willingness to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roles.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 bg-[#0d2240]/5 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#cc1e1e]" />
                    </div>
                    <h3
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="mt-1 text-[#cc1e1e] text-xs uppercase tracking-wider"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {r.commitment}
                    </p>
                    <p
                      className="mt-3 text-[#0d2240]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {r.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* No experience note */}
            <div className="mt-8 flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <p
                className="text-[#0d2240]/65 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[#0d2240] font-semibold">No experience necessary.</span>{" "}
                All officials receive free Swim England training and a licence. Committee members
                are supported through induction and mentoring. The club will cover any reasonable
                costs associated with volunteering.
              </p>
            </div>
          </div>
        </section>

        {/* ── Become an official ────────────────────────────────────── */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Officials programme
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                  lineHeight: 1.2,
                }}
              >
                Become a qualified official
              </h2>

              {/* Swim England logo badge */}
              <div className="mt-4 inline-flex items-center gap-3 bg-[#f5f8fc] rounded-xl px-4 py-3 border border-gray-100">
                <img
                  src="https://d1s9j44aio5gjs.cloudfront.net/2017/02/Swim_England_500x159px.gif"
                  alt="Swim England"
                  className="h-7 w-auto"
                />
                <span
                  className="text-[#0d2240]/55 text-xs leading-tight"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Training delivered in partnership<br />with Swim England
                </span>
              </div>

              <p
                className="mt-4 text-[#0d2240]/70 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Swim England runs a structured officials pathway that takes you from Club Helper all
                the way through to Judge, Referee and beyond. You can progress at your own pace,
                and every level adds real value to the club and to competitive swimming in the region.
              </p>
              <p
                className="mt-3 text-[#0d2240]/70 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Training is free and typically delivered online followed by practical assessment at
                a gala. Many of our current officials started simply by volunteering as timekeepers
                at their first home meet.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { level: "Club Helper", desc: "Assist with poolside duties at club galas. Starting point for all new officials." },
                { level: "Timekeeper", desc: "Operate lane timing equipment. Swim England certified training course required." },
                { level: "Judge / Starter", desc: "Assess turns, finishes and starts under the rules of competition." },
                { level: "Referee", desc: "Oversee the entire competition. The most senior poolside official role." },
              ].map((s) => (
                <div
                  key={s.level}
                  className="flex items-start gap-4 bg-[#f5f8fc] rounded-xl px-5 py-4 border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#cc1e1e] shrink-0 mt-2" />
                  <div>
                    <p
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {s.level}
                    </p>
                    <p
                      className="mt-0.5 text-[#0d2240]/55 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionLayout>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#0d2240] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span
            className="text-white/50 text-xs uppercase tracking-widest"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
          >
            Join us
          </span>
          <h2
            className="mt-2 text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            Get involved today
          </h2>
          <p
            className="mt-3 text-white/60 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            If you'd like to volunteer or find out more about any of the roles above,
            drop us an email and we'll get back to you.
          </p>
          <a
            href="mailto:volunteers@cannockphoenixsc.org"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Email the volunteer co-ordinator
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}