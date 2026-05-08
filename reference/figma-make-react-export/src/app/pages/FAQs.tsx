import { useState } from "react";
import { ChevronDown, ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const faqs = [
  {
    category: "Getting Started",
    items: [
      { q: "How do I join Cannock Phoenix?", a: "The easiest way is to request a free trial via our Join Phoenix page. We'll arrange a taster session and if you're happy, our Membership Secretary will guide you through joining." },
      { q: "Does my child need to be able to swim already?", a: "No — our Learn to Swim programme starts from complete beginners (Stage 1). Older children and complete non-swimmers are very welcome. For the Competitive Squad, swimmers need to be able to swim 25 metres confidently in at least two strokes." },
      { q: "What age can children join?", a: "Learn to Swim takes children from 3 years old. The Competitive Squad generally begins from age 8, subject to ability assessment. We are also launching a Masters section for adults aged 18 and over." },
      { q: "Is there a waiting list?", a: "Lesson spaces are limited and some stages do have waiting lists during busy periods. Contact our Membership Secretary to check current availability." },
    ],
  },
  {
    category: "Fees & Payments",
    items: [
      { q: "How much does it cost?", a: "Fees vary depending on programme and number of sessions. Full fee information is available on our Membership Fees page. We also offer a sibling discount." },
      { q: "How do I pay?", a: "Monthly fees are collected by Direct Debit via GoCardless, a secure FCA-regulated payment provider. You can set up your Direct Debit on our Payments page. One-off payments such as gala fees are handled separately." },
      { q: "Are there any additional costs?", a: "Gala entry fees apply to competitive swimmers (typically £3–8 per event per meet). Club kit is encouraged but not required initially. There is also an annual Swim England registration fee." },
    ],
  },
  {
    category: "Sessions & Training",
    items: [
      { q: "Where do you train?", a: "All sessions take place at Cannock Chase Leisure Centre, Auctioneers Way, Cannock, WS11 1AB." },
      { q: "How many sessions per week?", a: "Learn to Swim swimmers typically attend 1–2 sessions per week. Competitive Squad swimmers train 2–4 times per week depending on their squad level and goals." },
      { q: "What should my child wear and bring?", a: "A well-fitting swimsuit or swim shorts (no long board shorts in competitive lanes), goggles, and a swim hat. A water bottle and a dry bag for kit are recommended." },
      { q: "Do sessions run during school holidays?", a: "Some sessions run during school holidays and some don't. The current holiday schedule is confirmed at the start of each term via Swim Manager and email." },
    ],
  },
  {
    category: "Welfare & Safety",
    items: [
      { q: "Are your teachers and coaches DBS checked?", a: "Yes — all CPSC teaching and coaching staff hold current enhanced DBS certificates. All coaches are also Swim England qualified." },
      { q: "What is your safeguarding policy?", a: "The safety and welfare of every child is our absolute priority. Our full safeguarding policy is available on the Welfare & Policies page. Our Welfare Officers are Kerry Purnell and Claire Bond." },
      { q: "Can parents watch sessions?", a: "Parents are welcome to watch sessions from designated spectator areas. Photography is subject to our photography and social media policy." },
    ],
  },
];

export default function FAQs() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div>
      <PageHero
        sectionLabel="Join Phoenix"
        SectionIcon={UserPlus}
        accentColor="#0891b2"
        title="FAQs"
        subtitle="Answers to the questions parents ask most."
      />
      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <div className="space-y-10">
            {faqs.map((cat) => (
              <div key={cat.category}>
                <h2
                  className="text-[#0d2240] mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
                >
                  {cat.category}
                </h2>
                <div className="space-y-2">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItem === key;
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                          isOpen
                            ? "border border-[#0d2240]/15 shadow-md"
                            : "border border-gray-200 shadow-sm hover:shadow-md hover:border-[#0d2240]/10"
                        }`}
                      >
                        <button
                          type="button"
                          className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
                            isOpen ? "bg-[#0d2240]/[0.03]" : "bg-white hover:bg-[#0d2240]/[0.015]"
                          }`}
                          onClick={() => setOpenItem(isOpen ? null : key)}
                          aria-expanded={isOpen}
                        >
                          <span
                            className="text-[#0d2240] text-sm"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            {item.q}
                          </span>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                              isOpen
                                ? "bg-[#0d2240] text-white"
                                : "bg-[#0d2240]/8 text-[#0d2240]/50"
                            }`}
                          >
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </div>
                        </button>
                        <div
                          className="overflow-hidden transition-all duration-200"
                          style={{ maxHeight: isOpen ? "20rem" : 0 }}
                        >
                          <div className="bg-white border-t border-[#0d2240]/8">
                            <p
                              className="px-5 py-4 text-[#0d2240]/70 text-sm leading-relaxed"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#f5f8fc] rounded-2xl p-6 border border-[#0d2240]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-[#0d2240]/65 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Still have a question? We're happy to help.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Contact us <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}