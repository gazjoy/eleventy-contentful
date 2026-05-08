import { useState } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  AlertTriangle,
  Heart,
  ExternalLink,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const concernTypes = [
  "Child welfare / safeguarding",
  "Bullying or harassment",
  "Behaviour concern — swimmer",
  "Behaviour concern — adult / coach / volunteer",
  "Photography or social media misuse",
  "Discrimination or abuse",
  "Other",
];

const relationships = [
  "Parent / guardian",
  "Swimmer",
  "Coach / teacher",
  "Volunteer",
  "Committee member",
  "Other",
];

type FormState = {
  name: string;
  relationship: string;
  phone: string;
  email: string;
  concernType: string;
  aboutWhom: string;
  whenWhere: string;
  details: string;
  reportedElsewhere: string;
  isAnonymous: boolean;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  relationship: "",
  phone: "",
  email: "",
  concernType: "",
  aboutWhom: "",
  whenWhere: "",
  details: "",
  reportedElsewhere: "",
  isAnonymous: false,
  consent: false,
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const inputBase =
  "w-full px-4 py-3 rounded-xl border text-sm text-[#0d2240] bg-white placeholder-[#0d2240]/30 outline-none focus:ring-2 focus:ring-[#0d2240]/20 transition-colors";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 text-[#cc1e1e] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
      {msg}
    </p>
  );
}

export default function Welfare() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }));

  const clearError = (key: keyof FormState) =>
    setErrors((e) => { const n = { ...e }; delete n[key]; return n; });

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.isAnonymous) {
      if (!form.name.trim()) e.name = "Please enter your name, or tick 'Submit anonymously'.";
      if (!form.phone.trim()) e.phone = "A contact number helps us follow up. Tick anonymous if you prefer not to share.";
    }
    if (!form.concernType) e.concernType = "Please select a concern type.";
    if (!form.details.trim()) e.details = "Please describe your concern — include as much detail as you can.";
    if (!form.isAnonymous && !form.consent) e.consent = "Please confirm you consent to your details being held securely.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Heart}
        accentColor="#db2777"
        title="Welfare & Concerns"
        subtitle="The safety and welfare of every swimmer is our first priority. Contact our Welfare Officers or raise a concern confidentially below."
      />

      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">

          {/* ── Emergency strip ─────────────────────────────────────── */}
          <div className="bg-[#cc1e1e] rounded-2xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle size={17} className="text-white shrink-0 mt-0.5" />
            <p
              className="text-white text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              If a child is in <span className="underline underline-offset-2">immediate danger</span>, call{" "}
              <span className="text-yellow-200 text-base">999</span> first. Do not wait to contact the club.
            </p>
          </div>

          {/* ── Welfare Officers ─────────────────────────────────────── */}
          <div className="bg-[#0d2240] rounded-2xl p-6 text-white mb-6">
            <div className="flex items-start gap-4">
              <ShieldCheck size={22} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h2
                  className="text-white"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
                >
                  Welfare Officers
                </h2>
                <p
                  className="mt-1.5 text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Speak directly with a Welfare Officer at poolside, by email, or use the form below.
                  All concerns are treated with strict confidentiality.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { name: "Kerry Purnell", role: "Welfare Officer" },
                  ].map((w) => (
                    <a
                      key={w.name}
                      href="mailto:welfare@cannockswimmingclub.org"
                      className="flex items-center gap-2.5 bg-white/10 hover:bg-white/18 transition-colors rounded-xl px-4 py-2.5"
                    >
                      <Mail size={13} className="text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                          {w.name}
                        </p>
                        <p className="text-white/50 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                          {w.role}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:welfare@cannockswimmingclub.org"
                  className="mt-3 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={13} />
                  welfare@cannockswimmingclub.org
                </a>
              </div>
            </div>
          </div>

          {/* ── External helplines ────────────────────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            <a
              href="tel:01509618700"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0d2240]/5 flex items-center justify-center shrink-0">
                <Phone size={15} className="text-[#0d2240]" />
              </div>
              <div>
                <p className="text-[#0d2240] text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  Swim England Safeguarding
                </p>
                <p className="text-[#0d2240]/45 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  01509 618700
                </p>
              </div>
            </a>
            <a
              href="https://www.nspcc.org.uk/keeping-children-safe/reporting-abuse/report/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0d2240]/5 flex items-center justify-center shrink-0">
                <ExternalLink size={15} className="text-[#0d2240]" />
              </div>
              <div>
                <p className="text-[#0d2240] text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  NSPCC — Report Abuse
                </p>
                <p className="text-[#0d2240]/45 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  0808 800 5000 · nspcc.org.uk
                </p>
              </div>
            </a>
          </div>

          {/* ── Raise a Concern form ─────────────────────────────────── */}
          <div className="border-t border-gray-100 pt-10">
            <span
              className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Raise a Concern
            </span>
            <h2
              className="mt-2 text-[#0d2240]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}
            >
              Submit a welfare concern
            </h2>
            <p
              className="mt-2 text-[#0d2240]/60 max-w-xl text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Use this form to report any welfare or safeguarding concern, including bullying, inappropriate
              behaviour, or anything that doesn't feel right. You may submit anonymously if you wish.
            </p>

            {/* Confidentiality notice */}
            <div className="mt-6 bg-[#f5f8fc] border border-[#0d2240]/10 rounded-2xl p-5 flex items-start gap-3 mb-8">
              <ShieldCheck size={15} className="text-[#0d2240]/40 shrink-0 mt-0.5" />
              <p className="text-[#0d2240]/65 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-[#0d2240] font-semibold">Strictly confidential.</span>{" "}
                Submissions are seen only by the club's Welfare Officer — Kerry Purnell.
                We will acknowledge receipt within 24 hours and respond within 48 hours. For urgent matters, please
                contact us directly or call Swim England on 01509 618700.
              </p>
            </div>

            {submitted ? (
              /* ── Success state ──────────────────────────────────────── */
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={26} className="text-emerald-600" />
                </div>
                <h3
                  className="text-emerald-900"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}
                >
                  Concern received
                </h3>
                <p
                  className="mt-2 text-emerald-700 text-sm leading-relaxed max-w-md mx-auto"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Thank you for getting in touch. Your concern has been submitted to the Welfare Officers.
                  {!form.isAnonymous && " We'll aim to acknowledge your submission within 24 hours."}
                </p>
                <p
                  className="mt-4 text-emerald-600/70 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  If the situation changes or becomes urgent, please call 999 or contact a Welfare Officer directly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm); setErrors({}); }}
                  className="mt-6 text-sm text-emerald-700 hover:text-emerald-900 underline underline-offset-2 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Submit another concern
                </button>
              </div>
            ) : (
              /* ── The form ────────────────────────────────────────────── */
              <form onSubmit={handleSubmit} noValidate className="space-y-7">

                {/* Anonymous toggle */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.isAnonymous}
                    onChange={(e) => {
                      set("isAnonymous", e.target.checked);
                      setErrors({});
                    }}
                    className="mt-0.5 w-4 h-4 rounded accent-[#0d2240] cursor-pointer shrink-0"
                  />
                  <div>
                    <span
                      className="text-[#0d2240] text-sm"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      Submit anonymously
                    </span>
                    <span
                      className="ml-2 text-[#0d2240]/45 text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Your name and contact details won't be recorded
                    </span>
                  </div>
                </label>

                {/* Personal details — hidden when anonymous */}
                {!form.isAnonymous && (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          className="block text-[#0d2240] text-sm mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Your name <span className="text-[#cc1e1e]">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => { set("name", e.target.value); clearError("name"); }}
                          placeholder="Full name"
                          className={`${inputBase} ${errors.name ? "border-[#cc1e1e] focus:border-[#cc1e1e]" : "border-gray-200 focus:border-[#0d2240]/40"}`}
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                        <FieldError msg={errors.name} />
                      </div>

                      {/* Relationship */}
                      <div>
                        <label
                          className="block text-[#0d2240] text-sm mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Your relationship to the club
                        </label>
                        <div className="relative">
                          <select
                            value={form.relationship}
                            onChange={(e) => set("relationship", e.target.value)}
                            className={`${inputBase} border-gray-200 focus:border-[#0d2240]/40 appearance-none pr-9`}
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            <option value="">Select…</option>
                            {relationships.map((r) => <option key={r} value={r}>{r}</option>)}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0d2240]/40 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label
                          className="block text-[#0d2240] text-sm mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Contact number <span className="text-[#cc1e1e]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => { set("phone", e.target.value); clearError("phone"); }}
                          placeholder="07xxx xxxxxx"
                          className={`${inputBase} ${errors.phone ? "border-[#cc1e1e] focus:border-[#cc1e1e]" : "border-gray-200 focus:border-[#0d2240]/40"}`}
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                        <FieldError msg={errors.phone} />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-[#0d2240] text-sm mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Email address{" "}
                          <span className="text-[#0d2240]/35 text-xs font-normal">(optional)</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="your@email.com"
                          className={`${inputBase} border-gray-200 focus:border-[#0d2240]/40`}
                          style={{ fontFamily: "Inter, sans-serif" }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Concern type */}
                <div>
                  <label
                    className="block text-[#0d2240] text-sm mb-1.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    Type of concern <span className="text-[#cc1e1e]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.concernType}
                      onChange={(e) => { set("concernType", e.target.value); clearError("concernType"); }}
                      className={`${inputBase} appearance-none pr-9 ${errors.concernType ? "border-[#cc1e1e] focus:border-[#cc1e1e]" : "border-gray-200 focus:border-[#0d2240]/40"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <option value="">Select a category…</option>
                      {concernTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0d2240]/40 pointer-events-none" />
                  </div>
                  <FieldError msg={errors.concernType} />
                </div>

                {/* About whom */}
                <div>
                  <label
                    className="block text-[#0d2240] text-sm mb-1.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    Who is the concern about?{" "}
                    <span className="text-[#0d2240]/35 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.aboutWhom}
                    onChange={(e) => set("aboutWhom", e.target.value)}
                    placeholder="e.g. a swimmer aged 10, or describe the person without naming them"
                    className={`${inputBase} border-gray-200 focus:border-[#0d2240]/40`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                {/* When / where */}
                <div>
                  <label
                    className="block text-[#0d2240] text-sm mb-1.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    When and where did this happen?{" "}
                    <span className="text-[#0d2240]/35 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.whenWhere}
                    onChange={(e) => set("whenWhere", e.target.value)}
                    placeholder="e.g. Tuesday evening session, poolside, approx. 7pm"
                    className={`${inputBase} border-gray-200 focus:border-[#0d2240]/40`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                {/* Details */}
                <div>
                  <label
                    className="block text-[#0d2240] text-sm mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    Description of your concern <span className="text-[#cc1e1e]">*</span>
                  </label>
                  <p className="text-[#0d2240]/45 text-xs mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Include what happened, who was involved, and anything you witnessed or were told. The more detail, the better.
                  </p>
                  <textarea
                    value={form.details}
                    onChange={(e) => { set("details", e.target.value); clearError("details"); }}
                    rows={6}
                    placeholder="Describe the concern in your own words…"
                    className={`${inputBase} resize-y ${errors.details ? "border-[#cc1e1e] focus:border-[#cc1e1e]" : "border-gray-200 focus:border-[#0d2240]/40"}`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                  <FieldError msg={errors.details} />
                </div>

                {/* Reported elsewhere */}
                <div>
                  <label
                    className="block text-[#0d2240] text-sm mb-2.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    Has this been reported to anyone else?
                  </label>
                  <div className="flex flex-wrap gap-5">
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="reportedElsewhere"
                          value={opt}
                          checked={form.reportedElsewhere === opt}
                          onChange={() => set("reportedElsewhere", opt)}
                          className="w-4 h-4 accent-[#0d2240] cursor-pointer"
                        />
                        <span
                          className="text-[#0d2240]/70 text-sm"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consent (non-anonymous only) */}
                {!form.isAnonymous && (
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => { set("consent", e.target.checked); clearError("consent"); }}
                        className="mt-0.5 w-4 h-4 rounded accent-[#0d2240] cursor-pointer shrink-0"
                      />
                      <span
                        className="text-[#0d2240]/65 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        I consent to my contact details being held securely by the club's Welfare Officers
                        for the purpose of following up on this concern. Details will not be shared beyond
                        those directly involved in the safeguarding process.
                      </span>
                    </label>
                    <FieldError msg={errors.consent} />
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0d2240] hover:bg-[#1a3a5c] text-white rounded-full transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    <ShieldCheck size={16} />
                    Submit concern securely
                  </button>
                  <p className="mt-3 text-[#0d2240]/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    By submitting, you confirm that the information provided is accurate to the best of your knowledge.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Club Policies crosslink */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="text-[#0d2240]/55 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Looking for our safeguarding policy, codes of conduct, or GDPR documentation?{" "}
              <Link
                to="/club-policies"
                className="text-[#cc1e1e] hover:text-[#a81818] font-semibold transition-colors"
              >
                View Club Policies →
              </Link>
            </p>
          </div>

        </section>
      </SectionLayout>
    </div>
  );
}