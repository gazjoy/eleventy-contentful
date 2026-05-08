import { Building2, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const contacts = [
  {
    role: "General Enquiries",
    email: "info@cannockphoenixsc.org",
    description: "Not sure who to contact? Start here and we'll point you in the right direction.",
  },
  {
    role: "Membership Secretary",
    email: "membership@cannockswimmingclub.org",
    description: "Joining the club, membership renewals, or questions about fees.",
  },
  {
    role: "Treasurer",
    email: "treasurer@cannockswimmingclub.org",
    description: "Payment queries, bank transfer details, or fee disputes.",
  },
  {
    role: "Welfare Officer",
    email: "welfare@cannockswimmingclub.org",
    description: "Safeguarding concerns or any matter relating to a swimmer's welfare.",
  },
  {
    role: "Head Teacher (Learn to Swim)",
    email: "workforce@cannockswimmingclub.org",
    description: "Questions about the Learn to Swim programme, lesson placement, or teaching staff.",
  },
  {
    role: "Fixtures & Open Meets",
    email: "fixtures@cannockswimmingclub.org",
    description: "Gala entries, competition fixtures, and open meet queries.",
  },
];

export default function Contact() {
  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Building2}
        accentColor="#db2777"
        title="Get in Touch"
        subtitle="Not sure who to contact? Use the list below to find the right person for your query."
      />
      <SectionLayout>
        {/* Contacts grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <h2
            className="text-[#0d2240] mb-8"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.25rem" }}
          >
            Who to contact
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <div
                key={c.email}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2"
              >
                <p
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  {c.role}
                </p>
                <p
                  className="text-[#0d2240]/55 text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {c.description}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-auto flex items-center gap-1.5 text-[#cc1e1e] hover:text-[#a81818] transition-colors text-sm"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  <Mail size={13} />
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <h2
            className="text-[#0d2240] mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.25rem" }}
          >
            Where to find us
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-[#cc1e1e]" />
              </div>
              <div>
                <p
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Training Venue
                </p>
                <p
                  className="mt-1 text-[#0d2240]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Cannock Chase Leisure Centre<br />
                  Auctioneers Way<br />
                  Cannock, WS11 1AB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={16} className="text-[#cc1e1e]" />
              </div>
              <div>
                <p
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Response Time
                </p>
                <p
                  className="mt-1 text-[#0d2240]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We aim to respond to all enquiries within 2–3 working days. Welfare matters are treated with priority.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={16} className="text-[#cc1e1e]" />
              </div>
              <div>
                <p
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Safeguarding
                </p>
                <p
                  className="mt-1 text-[#0d2240]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  For safeguarding concerns contact our Welfare Officer directly at{" "}
                  <a href="mailto:welfare@cannockswimmingclub.org" className="text-[#cc1e1e] hover:underline">
                    welfare@cannockswimmingclub.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}