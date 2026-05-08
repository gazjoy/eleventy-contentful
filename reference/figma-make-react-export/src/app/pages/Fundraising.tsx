import {
  Heart,
  ArrowRight,
  ExternalLink,
  Trophy,
  Repeat2,
  Gift,
  Mail,
  Star,
  HandHeart,
  Landmark,
} from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

// ── Ongoing Fundraisers ───────────────────────────────────────────────────────

const ongoingFundraisers = [
  {
    id: "easyfundraising",
    title: "easyfundraising",
    subtitle: "You shop, brands donate — for free",
    description:
      "When you shop online with over 7,000 brands including Amazon, eBay, Tesco, and more, a donation is made to Cannock Phoenix at no extra cost to you. Sign up for free and start raising every time you shop.",
    url: "https://www.easyfundraising.org.uk/causes/cannockphoenixsc/",
    cta: "Join & start raising",
    youtube: "GgFEVPnCBcE",
    badge: "Free to join",
  },
  {
    id: "southstaffs",
    title: "South Staffs Lottery",
    subtitle: "Win big, support your local club",
    description:
      "Cannock Phoenix Swimming Club is a beneficiary of the South Staffordshire Community Lottery. Buy a ticket for a chance to win big prizes including a £25,000 jackpot — and help raise much-needed funds for the club at the same time.",
    url: "https://www.southstaffordshirecommunitylottery.co.uk/support/cannock-phoenix-swimming-club",
    cta: "Buy a lottery ticket",
    badge: "£1 per ticket",
  },
];

// ── Grants ────────────────────────────────────────────────────────────────────

const grants = [
  {
    id: "tesco",
    title: "Tesco Blue Token Scheme",
    description:
      "When Tesco runs its Blue Token Scheme, customers can vote for their chosen local cause. Your votes directly influence how Tesco distributes its community fundraising pot. Keep an eye out for tokens in-store and vote for Cannock Phoenix!",
    url: "https://www.tescoplc.com/sustainability/communities/community-fundraising/",
    cta: "Learn about the scheme",
    status: "Apply when open",
  },
  {
    id: "coop",
    title: "Co-op Local Community Fund",
    description:
      "Co-op members can choose a local cause to support through their membership. Every time a Co-op member buys own-brand products or services, a percentage is donated to their chosen community cause. We've benefitted from this scheme in the past.",
    url: "https://www.coop.co.uk/causes",
    cta: "Visit Co-op causes",
    status: "Apply when open",
  },
  {
    id: "lions",
    title: "Lions Club",
    description:
      "The Lions Club has previously contributed to Cannock Phoenix, helping us acquire heart rate monitors for our coaching programme. We continue to maintain a positive relationship with our local Lions Club for future grant opportunities.",
    url: null,
    cta: null,
    status: "Ongoing relationship",
  },
];

// ── One-off Fundraisers ───────────────────────────────────────────────────────

const oneOffFundraisers = [
  {
    id: "gopro",
    title: "Operation GoPro!",
    platform: "Crowdfunder UK",
    description:
      "Cannock Phoenix wanted to take their swimmers to the next level. Operation GoPro aimed to equip the club with GoPro cameras to help improve swimmer technique through visual coaching — allowing coaches and swimmers to review and refine their strokes.",
    url: "https://www.crowdfunder.co.uk/p/operation-gopro",
    cta: "View the campaign",
    status: "Completed",
  },
];

// ── Success Stories ──────────────────────────────────────────────────────────

const successStories = [
  {
    title: "Heart Rate Monitors",
    via: "Lions Club Contribution",
    description:
      "Thanks to a generous contribution from our local Lions Club, we were able to purchase heart rate monitors for our coaching programme, giving coaches better insight into swimmer fitness and effort levels during training.",
  },
  {
    title: "Operation GoPro!",
    via: "Crowdfunder Campaign",
    description:
      "Our Crowdfunder campaign successfully raised funds to purchase GoPro cameras, enabling our coaches to film and review swimmer technique — a significant step forward in the quality of coaching we can offer.",
  },
];

export default function Fundraising() {
  return (
    <div>
      <PageHero
        sectionLabel="Get Involved"
        SectionIcon={Heart}
        accentColor="#cc1e1e"
        title="Fundraising & Sponsorship"
        subtitle="Every pound raised goes directly back into the club — keeping fees accessible, improving facilities, and supporting our swimmers."
      />

      <SectionLayout>
        {/* ── Ongoing Fundraisers ──────────────────────────────────── */}
        <section className="bg-[#f5f8fc] py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ongoing Fundraisers
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                }}
              >
                Raise money while you live your life
              </h2>
              <p
                className="mt-2 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                These schemes run all year round — sign up once and they work in the background for you.
              </p>
            </div>

            <div className="space-y-8">
              {ongoingFundraisers.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className={`p-6 sm:p-8 ${f.youtube ? "flex flex-col lg:flex-row gap-6 lg:gap-8 items-start" : ""}`}>
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Repeat2 size={15} className="text-[#cc1e1e]" />
                            <span
                              className="text-[#cc1e1e] text-xs uppercase tracking-widest font-semibold"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              Ongoing
                            </span>
                          </div>
                          <h3
                            className="text-[#0d2240]"
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: 800,
                              fontSize: "1.1rem",
                            }}
                          >
                            {f.title}
                          </h3>
                          <p
                            className="text-[#0d2240]/55 text-sm mt-0.5"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {f.subtitle}
                          </p>
                        </div>
                        <span
                          className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          {f.badge}
                        </span>
                      </div>

                      <p
                        className="text-[#0d2240]/65 text-sm leading-relaxed mb-5"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {f.description}
                      </p>

                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        {f.cta}
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    {/* YouTube embed — sits to the right on desktop */}
                    {f.youtube && (
                      <div className="w-full lg:w-80 xl:w-96 shrink-0">
                        <p
                          className="text-[#0d2240]/50 text-xs uppercase tracking-widest mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                        >
                          How it works
                        </p>
                        <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ paddingTop: "56.25%" }}>
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${f.youtube}`}
                            title="easyfundraising explained in 60 seconds"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Grants ─────────────────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Grants &amp; Community Schemes
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                }}
              >
                Grants we apply for
              </h2>
              <p
                className="mt-2 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We actively apply for community grants and funding schemes when they open. Your support — through votes, memberships, and awareness — makes a real difference to our applications.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {grants.map((g) => (
                <div
                  key={g.id}
                  className="bg-[#f5f8fc] rounded-2xl border border-gray-100 p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Landmark size={14} className="text-[#cc1e1e]" />
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full bg-[#0d2240]/8 text-[#0d2240]/60"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {g.status}
                    </span>
                  </div>
                  <h3
                    className="text-[#0d2240]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                  >
                    {g.title}
                  </h3>
                  <p
                    className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {g.description}
                  </p>
                  {g.url && g.cta && (
                    <a
                      href={g.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-[#cc1e1e] hover:text-[#a81818] text-sm transition-colors"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {g.cta} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── One-off Fundraisers ──────────────────────────────────── */}
        <section className="bg-[#f5f8fc] py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                One-off Fundraisers
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                }}
              >
                Targeted campaigns
              </h2>
              <p
                className="mt-2 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                From time to time we run specific campaigns to fund a particular piece of equipment or initiative.
              </p>
            </div>

            {oneOffFundraisers.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift size={14} className="text-[#cc1e1e]" />
                    <span
                      className="text-xs text-[#0d2240]/50"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {f.platform}
                    </span>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {f.status}
                    </span>
                  </div>
                  <h3
                    className="text-[#0d2240]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {f.description}
                  </p>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {f.cta} <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Success Stories ──────────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Success Stories
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                }}
              >
                Fundraising that made a difference
              </h2>
              <p
                className="mt-2 text-[#0d2240]/60 max-w-xl text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Here's what your support has helped us achieve.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {successStories.map((s) => (
                <div
                  key={s.title}
                  className="bg-[#f5f8fc] rounded-2xl border border-gray-100 p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy size={14} className="text-[#cc1e1e]" />
                    <span
                      className="text-xs text-[#0d2240]/50"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {s.via}
                    </span>
                  </div>
                  <h3
                    className="text-[#0d2240]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionLayout>

      {/* ── Sponsorship CTA — full width ────────────────────────────── */}
      <section className="bg-[#0d2240] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-[#cc1e1e]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <HandHeart size={26} className="text-[#cc1e1e]" />
          </div>
          <span
            className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sponsorship
          </span>
          <h2
            className="mt-2 text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
            }}
          >
            Interested in sponsoring Cannock Phoenix?
          </h2>
          <p
            className="mt-4 text-white/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We're developing formal sponsorship opportunities for local businesses who want to invest in grassroots sport and align their brand with a welcoming, family-focused club. Whether it's kit, galas, or our annual awards evening — we'd love to explore what might work for you.
          </p>
          <p
            className="mt-3 text-white/50 max-w-xl mx-auto text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sponsorship packages are coming soon. In the meantime, please get in touch with our Club Development lead to register your interest.
          </p>
          <div className="mt-8">
            <a
              href="mailto:committee@cannockswimmingclub.org?subject=Sponsorship%20Enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Mail size={15} />
              Register your interest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}