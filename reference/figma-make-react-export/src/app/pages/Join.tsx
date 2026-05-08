import { useState } from "react";
import { CheckCircle, ArrowRight, Phone, Mail, Clock, Waves, UserPlus } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const pathways = [
  {
    title: "Learn to Swim",
    ages: "Ages 3–14",
    desc: "Structured lessons through Swim England Stages 1–7. Perfect for beginners and improvers — no experience needed.",
    suitableIf: [
      "Your child cannot yet swim confidently",
      "Working through ASA / Swim England stages",
      "You want qualified, small-group teaching",
    ],
    accent: "#0891b2",
  },
  {
    title: "Competitive Squad",
    ages: "Ages 8+",
    desc: "Train and race competitively at club, county, and regional level with our dedicated coaching team.",
    suitableIf: [
      "Can swim 25m in two or more strokes",
      "Wants to race, compete, and improve times",
      "Can commit to 2–4 sessions per week",
    ],
    accent: "#cc1e1e",
  },
];

const steps = [
  {
    n: "1",
    title: "Fill in the form",
    desc: "Takes two minutes. Tell us about your child and what you're looking for.",
  },
  {
    n: "2",
    title: "We give you a call",
    desc: "Within 2 working days — a friendly chat to discuss your child's needs and find the right fit.",
  },
  {
    n: "3",
    title: "Come for your free trial",
    desc: "Join a session, meet the coaches, see if Phoenix feels right. No commitment, no pressure.",
  },
];

const trustPoints = [
  "Completely free — no payment, no obligation",
  "Suitable for all abilities from age 3",
  "Welcoming, friendly club with 50+ members",
  "Swim England affiliated · founded 1980",
];

const PROGRAMMES = ["Learn to Swim", "Competitive Squad", "Not sure — advise me"];

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    programme: "",
    message: "",
  });

  function field(id: keyof typeof form) {
    return {
      value: form[id],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [id]: e.target.value })),
    };
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.programme) return;
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        sectionLabel="Join Phoenix"
        SectionIcon={UserPlus}
        accentColor="#0891b2"
        title="Request a Free Trial"
        subtitle="Come and try us for free — no commitment, no pressure. Fill in the short form and we'll arrange everything."
      />

      {/* ── Pathway cards (inside SectionLayout for nav sidebar) ─── */}
      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <h2
            className="text-[#0d2240] mb-1"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.15rem" }}
          >
            Which programme is right for you?
          </h2>
          <p
            className="text-[#0d2240]/50 text-sm mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Not sure? Select "advise me" in the form below — we'll help you choose on the call.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {pathways.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p
                    className="text-[#0d2240]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem" }}
                  >
                    {p.title}
                  </p>
                  <span
                    className="shrink-0 px-2.5 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: p.accent + "18",
                      color: p.accent,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {p.ages}
                  </span>
                </div>
                <p
                  className="text-[#0d2240]/60 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {p.desc}
                </p>
                <ul className="space-y-1.5">
                  {p.suitableIf.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: p.accent }} />
                      <span
                        className="text-[#0d2240]/65 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </SectionLayout>

      {/* ── Reverse block — the form ──────────────────────────────── */}
      <div className="bg-[#0d2240] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-start">

            {/* ── Form card ────────────────────────────────────────── */}
            <div className="w-full lg:flex-1 min-w-0">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Card header strip */}
                <div className="bg-[#cc1e1e] px-8 lg:px-10 py-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Waves size={14} className="text-white" />
                  </div>
                  <span
                    className="text-white text-sm uppercase tracking-wider"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    Free trial request
                  </span>
                </div>

                <div className="px-8 lg:px-10 py-8 lg:py-10">
                  {submitted ? (
                    /* ── Success ───────────────────────────────────── */
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={30} className="text-emerald-500" />
                      </div>
                      <h3
                        className="text-[#0d2240] mb-3"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.5rem" }}
                      >
                        Request received!
                      </h3>
                      <p
                        className="text-[#0d2240]/55 max-w-sm mx-auto mb-2 leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Thanks for getting in touch. We'll call you within{" "}
                        <strong className="text-[#0d2240]">2 working days</strong> to arrange
                        your free trial session.
                      </p>
                      <p
                        className="text-[#0d2240]/40 text-sm mb-8"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Keep an eye on your inbox too — a confirmation is on its way.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          to="/"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Back to home
                        </Link>
                        <Link
                          to="/faqs"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 text-[#0d2240]/60 hover:border-[#0d2240]/30 hover:text-[#0d2240] text-sm rounded-full transition-colors"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Read the FAQs <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* ── Form ──────────────────────────────────────── */
                    <>
                      <h2
                        className="text-[#0d2240] mb-1"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 900,
                          fontSize: "clamp(1.3rem, 3vw, 1.65rem)",
                        }}
                      >
                        Book your free trial
                      </h2>
                      <p
                        className="text-[#0d2240]/45 text-sm mb-7"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Just a couple of minutes — we'll do the rest.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: names */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="parentName"
                              className="block text-[#0d2240] text-sm mb-1.5"
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              Parent / Guardian name{" "}
                              <span className="text-[#cc1e1e]">*</span>
                            </label>
                            <input
                              id="parentName"
                              type="text"
                              required
                              placeholder="Your full name"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all"
                              style={{ fontFamily: "Inter, sans-serif" }}
                              {...field("parentName")}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="childName"
                              className="block text-[#0d2240] text-sm mb-1.5"
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              Child's name <span className="text-[#cc1e1e]">*</span>
                            </label>
                            <input
                              id="childName"
                              type="text"
                              required
                              placeholder="Child's first name"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all"
                              style={{ fontFamily: "Inter, sans-serif" }}
                              {...field("childName")}
                            />
                          </div>
                        </div>

                        {/* Row 2: age + phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="childAge"
                              className="block text-[#0d2240] text-sm mb-1.5"
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              Child's age <span className="text-[#cc1e1e]">*</span>
                            </label>
                            <input
                              id="childAge"
                              type="number"
                              required
                              min={3}
                              max={80}
                              placeholder="e.g. 8"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all"
                              style={{ fontFamily: "Inter, sans-serif" }}
                              {...field("childAge")}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-[#0d2240] text-sm mb-1.5"
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              Phone number
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              placeholder="Best number to reach you"
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all"
                              style={{ fontFamily: "Inter, sans-serif" }}
                              {...field("phone")}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[#0d2240] text-sm mb-1.5"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            Email address <span className="text-[#cc1e1e]">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all"
                            style={{ fontFamily: "Inter, sans-serif" }}
                            {...field("email")}
                          />
                        </div>

                        {/* Programme — visual toggle buttons */}
                        <div>
                          <label
                            className="block text-[#0d2240] text-sm mb-2"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            Interested in <span className="text-[#cc1e1e]">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {PROGRAMMES.map((p) => {
                              const active = form.programme === p;
                              return (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => setForm((f) => ({ ...f, programme: p }))}
                                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm border-2 transition-all cursor-pointer text-left ${
                                    active
                                      ? "border-[#cc1e1e] bg-[#cc1e1e]/5 text-[#cc1e1e]"
                                      : "border-gray-200 text-[#0d2240]/55 hover:border-[#0d2240]/25 hover:text-[#0d2240]"
                                  }`}
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: active ? 600 : 400,
                                  }}
                                >
                                  {/* Radio dot */}
                                  <span
                                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                                      active ? "border-[#cc1e1e] bg-[#cc1e1e]" : "border-gray-300"
                                    }`}
                                  >
                                    {active && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                                    )}
                                  </span>
                                  {p}
                                </button>
                              );
                            })}
                          </div>
                          {/* Invisible required helper so native validation fires */}
                          <input
                            className="sr-only"
                            required
                            tabIndex={-1}
                            aria-hidden
                            readOnly
                            value={form.programme}
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-[#0d2240] text-sm mb-1.5"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            Anything else we should know?
                          </label>
                          <textarea
                            id="message"
                            rows={3}
                            placeholder="Existing ability, medical notes, preferred days or times…"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-[#0d2240] placeholder:text-[#0d2240]/25 focus:outline-none focus:border-[#0d2240] focus:ring-2 focus:ring-[#0d2240]/8 transition-all resize-none"
                            style={{ fontFamily: "Inter, sans-serif" }}
                            {...field("message")}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#cc1e1e] hover:bg-[#a81818] active:bg-[#8e1515] text-white rounded-xl transition-colors"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 800,
                            fontSize: "1.05rem",
                          }}
                        >
                          Submit trial request
                          <ArrowRight size={18} />
                        </button>

                        <p
                          className="text-center text-[#0d2240]/30 text-xs"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <span className="text-[#cc1e1e]">*</span> Required &nbsp;·&nbsp; We
                          never share your data with third parties
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right info panel (on dark bg) ──────────────────── */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0">

              {/* Steps heading */}
              <p
                className="text-[#cc1e1e] text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              >
                What happens next
              </p>
              <h2
                className="text-white mb-9"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.35rem, 3vw, 1.8rem)",
                  lineHeight: 1.2,
                }}
              >
                Three simple steps to your trial.
              </h2>

              {/* Step list */}
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-9 h-9 rounded-full bg-[#cc1e1e] text-white flex items-center justify-center shrink-0"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.9rem" }}
                      >
                        {step.n}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px bg-white/10 flex-1 my-1.5 min-h-[1.75rem]" />
                      )}
                    </div>
                    <div className={`pb-6 pt-1 flex-1 min-w-0`}>
                      <p
                        className="text-white mb-1"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-white/50 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="mt-4 pt-7 border-t border-white/10">
                <ul className="space-y-2.5">
                  {trustPoints.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span
                        className="text-white/60 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prefer to talk? */}
              <div className="mt-7 rounded-2xl border border-white/12 p-5">
                <p
                  className="text-white mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                >
                  Prefer to talk first?
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+441543000000"
                    className="group flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/8 group-hover:bg-white/14 flex items-center justify-center transition-colors shrink-0">
                      <Phone size={13} />
                    </div>
                    <span>
                      01543 000 000{" "}
                      <span className="text-white/25 text-xs">(placeholder)</span>
                    </span>
                  </a>
                  <a
                    href="mailto:membership@cannockphoenix.org"
                    className="group flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/8 group-hover:bg-white/14 flex items-center justify-center transition-colors shrink-0">
                      <Mail size={13} />
                    </div>
                    <span className="break-all">
                      membership@cannockphoenix.org{" "}
                      <span className="text-white/25 text-xs">(placeholder)</span>
                    </span>
                  </a>
                  <div
                    className="flex items-center gap-2 text-white/30 text-xs pt-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Clock size={11} />
                    We aim to reply within 2 working days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}