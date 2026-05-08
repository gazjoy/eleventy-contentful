import { ArrowRight, Building2, Mail, Users, HandHeart } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router";

// ── Note: email addresses below are placeholders — update with real addresses ──

const officers = [
  {
    role: "President",
    holders: [{ name: "Sue Wallis", email: "president@cannockswimmingclub.org" }],
    description:
      "The President represents the organisation and supports it at a higher level. At Cannock Phoenix they are not always involved in the day-to-day running of the club but do meet with the committee when required.",
  },
  {
    role: "Chair",
    holders: [{ name: "Nicola Watkins", email: "chair@cannockswimmingclub.org" }],
    description:
      "The Chair leads the committee, runs meetings, ensures rules are followed, and keeps the organisation moving forward strategically.",
  },
  {
    role: "Secretary",
    holders: [{ name: "Linda Williams", email: "secretary@cannockswimmingclub.org" }],
    description:
      "The club Secretary keeps everything organised and properly recorded, ensuring meeting notes are captured and actions are owned and followed through on.",
  },
  {
    role: "Treasurer",
    holders: [{ name: "Michelle Such", email: "treasurer@cannockswimmingclub.org" }],
    description:
      "The Treasurer looks after the club's accounts and finances, ensuring they are in good order, bills and fees are paid on time and the club is financially robust.",
  },
];

const members = [
  {
    role: "Membership Secretary",
    contact: "Joining the club, membership renewals, or questions about fees.",
    holders: [{ name: "Nicola Watkins", email: "membership@cannockswimmingclub.org" }],
  },
  {
    role: "Welfare Officer",
    contact: "Safeguarding concerns or any matter relating to a swimmer's welfare.",
    holders: [{ name: "Kerry Purnell", email: "welfare@cannockswimmingclub.org" }],
  },
  {
    role: "Deputy Welfare Officer",
    contact: "Welfare matters when the Welfare Officer is unavailable.",
    holders: [{ name: "Claire Bond", email: "welfare@cannockswimmingclub.org" }],
  },
  {
    role: "Workforce & Volunteers Co-ordinator / Head Teacher",
    contact: "Volunteering opportunities, teaching enquiries, or Learn to Swim queries.",
    holders: [{ name: "Aidan Bolas", email: "workforce@cannockswimmingclub.org" }],
  },
  {
    role: "Officials Co-ordinator",
    contact: "Becoming a qualified official or officiating at galas.",
    holders: [{ name: "Anne Smith", email: "officials@cannockswimmingclub.org" }],
  },
  {
    role: "Schools Liaison",
    contact: "School partnerships, educational outreach, or swimming in schools.",
    holders: [],
  },
  {
    role: "Club Development",
    contact: "Ideas for growing the club, new initiatives, or strategic development.",
    holders: [],
  },
  {
    role: "Parents Representative",
    contact: "Raising a concern or passing feedback on behalf of parents.",
    holders: [{ name: "Michelle Dellaway", email: "committee@cannockswimmingclub.org" }],
  },
  {
    role: "Fixtures / Open Meet Secretary",
    contact: "Gala entries, competition fixtures, or hosting open meets.",
    holders: [
      { name: "Jenny Jarman", email: "fixtures@cannockswimmingclub.org" },
      { name: "Mark Clent", email: "fixtures@cannockswimmingclub.org" },
    ],
  },
  {
    role: "Swim 21 Co-ordinator",
    contact: "Swim England's Swim 21 accreditation or club standards queries.",
    holders: [
      { name: "Claire Bond", email: "committee@cannockswimmingclub.org" },
      { name: "Kerry Purnell", email: "committee@cannockswimmingclub.org" },
    ],
  },
];

export default function Committee() {
  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Building2}
        accentColor="#db2777"
        title="Club Committee"
        subtitle="The elected volunteers who keep Cannock Phoenix running."
      />

      <SectionLayout>
        {/* ── Key Roles ─────────────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Key Roles
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
              >
                Club Officers
              </h2>
              <p
                className="mt-2 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                The four principal elected roles that form the core of our club governance.
              </p>
            </div>

            {/* 2-column grid — comfortable within the sidebar layout */}
            <div className="grid sm:grid-cols-2 gap-5">
              {officers.map((officer) => (
                <div
                  key={officer.role}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0d2240]/5 flex items-center justify-center mb-3 shrink-0">
                    <Users size={16} className="text-[#cc1e1e]" />
                  </div>
                  <h3
                    className="text-[#0d2240]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                  >
                    {officer.role}
                  </h3>
                  <p
                    className="mt-2 text-[#0d2240]/55 leading-relaxed flex-1"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem" }}
                  >
                    {officer.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
                    {officer.holders.map((h) => (
                      <div key={h.name}>
                        <p
                          className="text-[#0d2240] text-sm"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          {h.name}
                        </p>
                        <a
                          href={`mailto:${h.email}`}
                          className="flex items-center gap-1 mt-0.5 text-[#cc1e1e] hover:text-[#a81818] transition-colors"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
                        >
                          <Mail size={11} className="shrink-0" />
                          {h.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Committee Members ─────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Full Committee
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
              >
                Committee Members
              </h2>
              <p
                className="mt-3 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Each role plays a vital part in keeping the club running smoothly.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {members.map((member, idx) => {
                const isVacant = member.holders.length === 0;
                return (
                  <div
                    key={member.role}
                    className={`flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 ${
                      idx % 2 === 0 ? "bg-white" : "bg-[#f5f8fc]"
                    } ${idx < members.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    {/* Role */}
                    <div className="sm:w-72 shrink-0">
                      <p
                        className="text-[#0d2240] text-sm"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        {member.role}
                      </p>
                      <p
                        className="mt-0.5 text-[#0d2240]/45 leading-snug"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                      >
                        {member.contact}
                      </p>
                    </div>

                    {/* Holder(s) */}
                    <div className="flex-1 flex flex-wrap gap-x-6 gap-y-2">
                      {isVacant ? (
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          Vacant — we'd love to hear from you
                        </span>
                      ) : (
                        member.holders.map((h) => (
                          <div key={h.name} className="flex flex-col gap-0.5">
                            <span
                              className="text-[#0d2240] text-sm"
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                            >
                              {h.name}
                            </span>
                            <a
                              href={`mailto:${h.email}`}
                              className="flex items-center gap-1 text-[#cc1e1e] hover:text-[#a81818] transition-colors"
                              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                            >
                              <Mail size={10} className="shrink-0" />
                              {h.email}
                            </a>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionLayout>

      {/* ── Get Involved CTA — outside SectionLayout for true full width ── */}
      <section className="bg-[#0d2240] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-[#cc1e1e]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <HandHeart size={26} className="text-[#cc1e1e]" />
          </div>
          <span
            className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get Involved
          </span>
          <h2
            className="mt-2 text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
            }}
          >
            Could you join the committee?
          </h2>
          <p
            className="mt-4 text-white/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our committee is made up of volunteers who give a little of their time to make a big
            difference for every swimmer at the club. Whether you have a specific skill to offer — finance,
            communications, event organisation — or simply want to play a bigger role in the club your
            child loves, we'd love to hear from you.
          </p>
          <p
            className="mt-3 text-white/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We currently have vacant positions for{" "}
            <span className="text-white font-semibold">Schools Liaison</span> and{" "}
            <span className="text-white font-semibold">Club Development</span> — both great opportunities to
            shape the future of Cannock Phoenix.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:committee@cannockswimmingclub.org"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Mail size={15} />
              Contact the Committee
            </a>
            <Link
              to="/volunteering"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Volunteering at CPSC <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}