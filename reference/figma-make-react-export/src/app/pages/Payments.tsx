import { useState } from "react";
import { Link } from "react-router";
import {
  Lock,
  Key,
  ShieldCheck,
  BadgeCheck,
  RefreshCw,
  CheckCircle,
  Building2,
  ChevronDown,
  ExternalLink,
  Mail,
} from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const GC_DIRECT_DEBIT_URL =
  "https://pay.gocardless.com/billing/static/collect-customer-details?id=BRF01KPTPWFM20K2R9GBFWRRQ40RD0S5&initial=%2Fcollect-customer-details";

const howItWorks = [
  {
    step: "1",
    title: "Click the button below",
    body: "You'll be taken to GoCardless — a UK-regulated payment provider. This is the same company used by thousands of schools, councils, and sports clubs.",
  },
  {
    step: "2",
    title: "Enter your bank details securely",
    body: "GoCardless collects your bank details via their encrypted, FCA-authorised platform. Cannock Phoenix never sees or stores your banking information.",
  },
  {
    step: "3",
    title: "We handle the rest",
    body: "Monthly fees are collected automatically on the scheduled date. You'll receive advance notice of any changes — and you can cancel at any time through your bank.",
  },
];

const ddGuarantee = [
  "Payments are protected by the UK Direct Debit Guarantee scheme — one of the most secure payment methods available.",
  "If a payment is ever taken in error, your bank must refund you immediately and in full — no questions asked.",
  "You will always receive at least 3 working days' advance notice of any change to the amount or date.",
  "You can cancel your Direct Debit at any time by contacting your bank or building society.",
  "The Direct Debit Guarantee is offered by all banks and building societies that accept Direct Debit instructions.",
];

const faqs = [
  {
    q: "Is it safe to set up a Direct Debit through this link?",
    a: "Yes — completely. The link goes directly to GoCardless, an FCA-authorised payment provider trusted by 90,000+ organisations including NHS trusts, councils, and major charities. GoCardless uses bank-level 256-bit SSL encryption. Cannock Phoenix never sees your bank account number or sort code.",
  },
  {
    q: "How much will I be charged each month?",
    a: "Monthly fees vary depending on which programme your child is enrolled in. Your fee will be confirmed by the club before your Direct Debit is activated. If you're unsure, please contact the Membership Secretary before setting up.",
  },
  {
    q: "When will payments be taken?",
    a: "Payments are collected monthly on a scheduled date agreed with you. You'll receive at least 3 days' notice before any payment is taken or changed.",
  },
  {
    q: "Can I cancel my Direct Debit?",
    a: "Yes. You can cancel at any time by contacting your bank or building society directly. Please also let the club know so we can update our records — contact the Membership Secretary via the Committee page.",
  },
  {
    q: "What if a payment is taken incorrectly?",
    a: "Under the Direct Debit Guarantee, your bank must refund you immediately and in full if any payment is taken in error. You can also contact the club and we will investigate promptly.",
  },
  {
    q: "I need to update my bank details — what do I do?",
    a: "Simply follow the GoCardless setup link again to create a new mandate. Your old one will be replaced. If you have any difficulty, contact us at treasurer@cannockswimmingclub.org and we'll help you through it.",
  },
];

export default function Payments() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        sectionLabel="Members"
        SectionIcon={Key}
        accentColor="#ca8a04"
        title="Club Fees & Payments"
        subtitle="Monthly fees collected securely by Direct Debit — no card details stored, no hidden costs."
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/15 border border-emerald-400/30 rounded-full">
          <Lock size={13} className="text-emerald-400" />
          <span
            className="text-emerald-300 text-xs uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Secure Payments · GoCardless
          </span>
        </div>
      </PageHero>

      <SectionLayout>
        {/* ── DIRECT DEBIT ──────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left-aligned heading block */}
            <div className="mb-14">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Monthly Membership Fees
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                }}
              >
                Set up your Direct Debit
              </h2>
              <p
                className="mt-3 text-[#0d2240]/60 max-w-xl text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Monthly fees are collected securely via GoCardless — the UK's leading
                Direct Debit provider, regulated by the Financial Conduct Authority.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* How it works steps */}
              <div className="lg:col-span-3 space-y-6">
                <h3
                  className="text-[#0d2240] mb-6"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem" }}
                >
                  How it works
                </h3>
                {howItWorks.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <div
                      className="w-9 h-9 rounded-full bg-[#0d2240] text-white flex items-center justify-center shrink-0 mt-0.5"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.85rem" }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <p
                        className="text-[#0d2240]"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="mt-1 text-[#0d2240]/60 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}

                {/* GoCardless trust note */}
                <div className="mt-6 flex items-start gap-3 bg-[#f5f8fc] rounded-xl p-4 border border-[#0d2240]/8">
                  <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <p
                    className="text-[#0d2240]/65 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="text-[#0d2240] font-semibold">GoCardless</span> is authorised and regulated by the
                    Financial Conduct Authority (FCA No. 597190). They process over £30 billion in payments each year
                    for 90,000+ organisations. Your bank details go directly to them — Cannock Phoenix never sees,
                    handles, or stores your banking information at any point.
                  </p>
                </div>
              </div>

              {/* CTA Card */}
              <div className="lg:col-span-2">
                <div className="bg-[#0d2240] rounded-3xl p-8 text-white shadow-2xl shadow-[#0d2240]/20">
                  {/* Secure badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Lock size={15} className="text-emerald-400" />
                    </div>
                    <span
                      className="text-emerald-300 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      Secure setup
                    </span>
                  </div>

                  <h3
                    className="text-white"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.25rem" }}
                  >
                    Monthly Direct Debit
                  </h3>
                  <p
                    className="mt-2 text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Click below to set up your recurring monthly payment. You'll be taken
                    directly to GoCardless's secure hosted page.
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Takes less than 2 minutes",
                      "No card details required",
                      "Fully protected by the Direct Debit Guarantee",
                      "Cancel at any time through your bank",
                    ].map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5">
                        <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                        <span
                          className="text-white/75 text-sm"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={GC_DIRECT_DEBIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl transition-colors shadow-lg shadow-emerald-900/30"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    <Lock size={15} />
                    Set Up Direct Debit
                    <ExternalLink size={13} className="opacity-70" />
                  </a>

                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={12} className="text-white/30" />
                    <p
                      className="text-center text-white/35 leading-snug"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem" }}
                    >
                      Secured by GoCardless · Protected by the Direct Debit Guarantee · FCA regulated
                    </p>
                  </div>
                </div>

                {/* Questions link */}
                <p
                  className="mt-5 text-center text-[#0d2240]/50 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Questions about fees?{" "}
                  <a
                    href="mailto:membership@cannockswimmingclub.org"
                    className="text-[#cc1e1e] hover:text-[#a81818] transition-colors underline underline-offset-2"
                  >
                    Contact the Membership Secretary
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIRECT DEBIT GUARANTEE ───────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <span
                  className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your Protection
                </span>
                <h2
                  className="mt-2 text-[#0d2240]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    lineHeight: 1.2,
                  }}
                >
                  The Direct Debit Guarantee
                </h2>
                <p
                  className="mt-4 text-[#0d2240]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Direct Debit is one of the most secure payment methods available in the UK,
                  backed by a formal guarantee scheme accepted by all UK banks and building societies.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm">
                  <ShieldCheck size={28} className="text-emerald-600 shrink-0" />
                  <div>
                    <p
                      className="text-[#0d2240] text-sm"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                    >
                      Guaranteed by your bank
                    </p>
                    <p
                      className="text-[#0d2240]/50 text-xs mt-0.5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Full refunds if anything goes wrong
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-3">
                {ddGuarantee.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-emerald-600" />
                    </div>
                    <p
                      className="text-[#0d2240]/70 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span
                className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Common Questions
              </span>
              <h2
                className="mt-2 text-[#0d2240]"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
              >
                Payment FAQs
              </h2>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                    openFaq === i
                      ? "border border-[#0d2240]/15 shadow-md"
                      : "border border-gray-200 shadow-sm hover:shadow-md hover:border-[#0d2240]/10"
                  }`}
                >
                  <button
                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                      openFaq === i ? "bg-[#0d2240]/[0.03]" : "bg-white hover:bg-[#0d2240]/[0.015]"
                    }`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span
                      className="text-[#0d2240] text-sm"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        openFaq === i
                          ? "bg-[#0d2240] text-white"
                          : "bg-[#0d2240]/8 text-[#0d2240]/50"
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="bg-white border-t border-[#0d2240]/8">
                      <p
                        className="px-6 py-5 text-[#0d2240]/70 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p
                className="text-[#0d2240]/50 text-sm mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Still have a question about payments?
              </p>
              <a
                href="mailto:treasurer@cannockswimmingclub.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d2240] hover:bg-[#1a3a5c] text-white rounded-full transition-colors text-sm"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                <Mail size={15} />
                Email the Treasurer
              </a>
            </div>
          </div>
        </section>
      </SectionLayout>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bg-[#0d2240] py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Lock size={28} className="text-emerald-400 mx-auto mb-4" />
          <h2
            className="text-white"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}
          >
            Ready to set up your Direct Debit?
          </h2>
          <p
            className="mt-3 text-white/60 text-sm leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            It takes under 2 minutes. You'll be redirected to GoCardless's secure,
            FCA-regulated platform.
          </p>
          <a
            href={GC_DIRECT_DEBIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full transition-colors shadow-lg shadow-emerald-900/30"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <Lock size={16} />
            Set Up Direct Debit
            <ExternalLink size={14} className="opacity-70" />
          </a>
          <p
            className="mt-4 text-white/30 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Protected by the Direct Debit Guarantee · Powered by GoCardless · FCA regulated
          </p>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p
              className="text-white/40 text-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Not yet a member?{" "}
              <Link to="/learn-to-swim" className="text-white/60 hover:text-white transition-colors underline underline-offset-2">
                Request a free trial
              </Link>{" "}
              · Questions?{" "}
              <Link to="/about/committee" className="text-white/60 hover:text-white transition-colors underline underline-offset-2">
                Contact the committee
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}