import { Key, FileText, Download, ExternalLink } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const downloads = [
  { title: "Member Code of Conduct", type: "PDF", description: "Expected standards of behaviour for all CPSC members.", size: "245 KB", comingSoon: true },
  { title: "Parent & Spectator Code of Conduct", type: "PDF", description: "Guidelines for parents and spectators at sessions and galas.", size: "180 KB", comingSoon: true },
  { title: "Swim England Learn to Swim Framework", type: "PDF", description: "Swim England's national framework explaining stages 1–7.", size: "1.2 MB", comingSoon: false, href: "https://www.swimming.org/learntoswim/" },
  { title: "Competition Entry Guide", type: "PDF", description: "How to read gala programmes, what to bring, and what to expect.", size: "310 KB", comingSoon: true },
  { title: "CPSC Training Log Template", type: "XLSX", description: "A simple weekly training log for competitive squad swimmers.", size: "55 KB", comingSoon: true },
];

const links = [
  { title: "Swim England", href: "https://www.swimming.org", description: "The national governing body for swimming in England." },
  { title: "Swim England Results System", href: "https://www.swimmingresults.org/", description: "Look up official times, rankings, and meet results." },
  { title: "British Swimming", href: "https://www.britishswimming.org/", description: "Olympic, Paralympic, and high-performance swimming in Great Britain." },
  { title: "Staffordshire ASA", href: "https://staffordshireasa.co.uk/", description: "County swimming association for Staffordshire clubs." },
];

export default function Resources() {
  return (
    <div>
      <PageHero
        sectionLabel="Members"
        SectionIcon={Key}
        accentColor="#ca8a04"
        title="Member Resources"
        subtitle="Downloads, documents, and useful links for Cannock Phoenix members and their families."
      />
      <SectionLayout>
        {/* Downloads */}
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <h2
            className="text-[#0d2240] mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}
          >
            Downloads
          </h2>
          <div className="space-y-3">
            {downloads.map((d) => (
              <div
                key={d.title}
                className={`flex items-center gap-4 bg-white border rounded-2xl shadow-sm px-5 py-4 ${
                  d.comingSoon ? "border-gray-100 opacity-60" : "border-gray-100"
                }`}
              >
                <div className="w-9 h-9 bg-[#0d2240]/5 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-[#0d2240]/40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[#0d2240]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    {d.title}
                  </p>
                  <p
                    className="text-[#0d2240]/50 text-xs mt-0.5 truncate"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {d.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className="text-[#0d2240]/30 text-xs hidden sm:block"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {d.type} · {d.size}
                  </span>
                  {d.comingSoon ? (
                    <span
                      className="px-2 py-1 bg-amber-50 text-amber-600 text-xs rounded-full border border-amber-200"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0d2240]/5 hover:bg-[#0d2240]/10 rounded-xl transition-colors"
                    >
                      <Download size={15} className="text-[#0d2240]" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* External links */}
        <section className="py-8 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <h2
            className="text-[#0d2240] mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}
          >
            Useful links
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {links.map((l) => (
              <a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 bg-[#0d2240]/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <ExternalLink size={14} className="text-[#0d2240]/40 group-hover:text-[#cc1e1e] transition-colors" />
                </div>
                <div>
                  <p
                    className="text-[#0d2240] group-hover:text-[#cc1e1e] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    {l.title}
                  </p>
                  <p
                    className="mt-0.5 text-[#0d2240]/50 text-xs leading-snug"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {l.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}