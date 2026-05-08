import { Key } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

export default function SwimManager() {
  return (
    <div>
      <PageHero
        sectionLabel="Members"
        SectionIcon={Key}
        accentColor="#ca8a04"
        title="Swim Manager"
        subtitle="Cannock Phoenix uses Swim Manager for squad management, attendance, and training programme access."
      />

      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          {/* Login CTA */}
          <div className="bg-[#0d2240] rounded-2xl p-8 text-white mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="bg-white rounded-xl px-4 py-3 shrink-0 shadow-sm">
              <img
                src="https://swimmanager.co.uk/wp-content/uploads/2025/10/Swim-Manager-Logo-with-Text78h-1.png"
                alt="Swim Manager"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <h2
                className="text-white"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}
              >
                Log in to your account
              </h2>
              <p
                className="mt-1 text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Access your squad schedule, training plans, attendance history, and gala entries.
                Your login details will have been sent by email from the club.
              </p>
            </div>
            <a
              href="https://www.swimmanager.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0d2240] rounded-full text-sm hover:bg-gray-100 transition-colors shrink-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              <Key size={14} />
              Go to Swim Manager
            </a>
          </div>

          {/* What you can do */}
          <h2
            className="text-[#0d2240] mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}
          >
            What you can do in Swim Manager
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              { title: "View training schedules", desc: "See your squad's upcoming sessions and any changes." },
              { title: "Mark attendance", desc: "Notify the club if your swimmer cannot attend a session." },
              { title: "Access training plans", desc: "Coaches can share drill sheets and weekly training focus." },
              { title: "Gala entries", desc: "Review and confirm entries submitted on your behalf." },
              { title: "Personal bests", desc: "View your swimmer's current personal best times." },
              { title: "Club communications", desc: "Receive important notices from the coaching team." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d2240]/30 shrink-0 mt-2" />
                <div>
                  <p
                    className="text-[#0d2240]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#0d2240]/50 text-xs mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Help */}
          <div className="flex items-start gap-3 bg-[#f5f8fc] rounded-2xl p-5 border border-[#0d2240]/8">
            <Key size={18} className="text-[#0d2240]/40 shrink-0 mt-0.5" />
            <div>
              <p
                className="text-[#0d2240]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Need help logging in?
              </p>
              <p
                className="mt-1 text-[#0d2240]/55 text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                If you haven't received your login details, or if you're having trouble
                accessing the system, please contact the Membership Secretary.
              </p>
              <a
                href="mailto:membership@cannockswimmingclub.org"
                className="mt-2 inline-flex items-center gap-1.5 text-[#cc1e1e] hover:text-[#a81818] text-sm transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Key size={13} />
                membership@cannockswimmingclub.org
              </a>
            </div>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}