import { CheckCircle, Lock, Info, UserPlus } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const programmes = [
  {
    name: "Learn to Swim",
    frequency: "Per month",
    tiers: [
      { label: "1 session per week", price: "£XX" },
      { label: "2 sessions per week", price: "£XX" },
    ],
    includes: [
      "Qualified Swim England teacher every session",
      "Stage-by-stage progression",
      "Certificate and badge awards",
      "Swim England annual registration (billed separately)",
    ],
  },
  {
    name: "Competitive Squad",
    frequency: "Per month",
    tiers: [
      { label: "Development Squad (2 sessions)", price: "£XX" },
      { label: "Performance Squad (3–4 sessions)", price: "£XX" },
    ],
    includes: [
      "Licensed Swim England coaches",
      "Access to squad training plans via Swim Manager",
      "Gala entries and results tracking (fees extra)",
      "Swim England annual registration (billed separately)",
    ],
  },
];

const extras = [
  { item: "Swim England annual registration", amount: "~£XX", note: "Per swimmer, billed once per year" },
  { item: "Gala entry fees", amount: "£3–8", note: "Per event, per meet. Varies by organiser" },
  { item: "Club kit (cap, hat, hoodie)", amount: "From £XX", note: "Optional but encouraged" },
  { item: "Sibling discount", amount: "10%", note: "On the lower monthly fee when 2+ siblings train" },
];

export default function MembershipFees() {
  return (
    <div>
      <PageHero
        sectionLabel="Join Phoenix"
        SectionIcon={UserPlus}
        accentColor="#0891b2"
        title="Membership Fees"
        subtitle="No hidden costs. All fees are collected monthly by Direct Debit."
      />

      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          {/* Placeholder note */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8">
            <Info size={15} className="text-amber-600 shrink-0 mt-0.5" />
            <p
              className="text-amber-700 text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="font-semibold">Prices to be confirmed.</span>{" "}
              The fees shown here are placeholders. Contact the Membership Secretary
              for current pricing before setting up a Direct Debit.
            </p>
          </div>

          {/* Programme cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {programmes.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col"
              >
                <h2
                  className="text-[#0d2240]"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem" }}
                >
                  {p.name}
                </h2>
                <p
                  className="text-[#0d2240]/45 text-xs mt-0.5 mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {p.frequency}
                </p>
                <div className="space-y-2 mb-5">
                  {p.tiers.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center justify-between bg-[#f5f8fc] rounded-xl px-4 py-2.5"
                    >
                      <span
                        className="text-[#0d2240]/70 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.label}
                      </span>
                      <span
                        className="text-[#0d2240]"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}
                      >
                        {t.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-100 mt-auto space-y-2">
                  {p.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span
                        className="text-[#0d2240]/60 text-xs leading-snug"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Extras table */}
          <h2
            className="text-[#0d2240] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
          >
            Additional costs
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-10">
            {extras.map((e, i) => (
              <div
                key={e.item}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 px-5 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#f5f8fc]"
                } ${i < extras.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <p
                  className="sm:flex-1 text-[#0d2240] text-sm"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {e.item}
                </p>
                <p
                  className="text-[#cc1e1e] sm:w-16 text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                >
                  {e.amount}
                </p>
                <p
                  className="text-[#0d2240]/45 text-xs sm:w-56"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {e.note}
                </p>
              </div>
            ))}
          </div>

          {/* Pay CTA */}
          <div className="bg-[#0d2240] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-1">
              <p
                className="text-white"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
              >
                Pay fees by secure Direct Debit
              </p>
              <p
                className="mt-1 text-white/55 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Set up once, collected automatically. Protected by the Direct Debit Guarantee.
              </p>
            </div>
            <Link
              to="/payments"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm rounded-full transition-colors shrink-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Lock size={13} />
              Set up Direct Debit
            </Link>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}