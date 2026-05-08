import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, ArrowRight, Star, Waves } from "lucide-react";
import { PaymentNudge } from "../components/PaymentNudge";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const learnImage =
  "https://images.unsplash.com/photo-1761589871820-b9cfbfb5d853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwdG8lMjBzd2ltJTIwcG9vbHxlbnwxfHx8fDE3NzQ0NjA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stages = [
  {
    level: "1",
    name: "Water Confidence",
    age: "4+ yrs",
    description: "Getting comfortable in the water — learning to move safely, submerge and begin to feel at home in the pool.",
    skills: [
      "Enter & exit pool safely",
      "Submerge to shoulder depth",
      "Move through water with support",
      "Float on front & back with support",
      "Basic kicking movements",
    ],
  },
  {
    level: "2",
    name: "Water Skills",
    age: "4+ yrs",
    description: "Building independence — floating and gliding unaided for the first time, swimming short distances without support.",
    skills: [
      "Fully submerge & blow bubbles",
      "Float unaided on front & back",
      "Glide from wall unassisted",
      "Swim 5m front crawl unaided",
      "Swim 5m backstroke unaided",
    ],
  },
  {
    level: "3",
    name: "Stroke Introduction",
    age: "5+ yrs",
    description: "Developing front crawl and backstroke technique, introducing breaststroke kick and water safety skills.",
    skills: [
      "Swim 10m front crawl",
      "Swim 10m backstroke",
      "Breaststroke kick with float",
      "Jump in & swim on",
      "Survival float for 30 seconds",
    ],
  },
  {
    level: "4",
    name: "Stroke Development",
    age: "6+ yrs",
    description: "Improving all three strokes over longer distances, with an introduction to butterfly kick and basic turns.",
    skills: [
      "Swim 25m front crawl",
      "Swim 25m backstroke",
      "Swim 25m breaststroke",
      "Butterfly leg kick with float",
      "Touch turns on front & back",
    ],
  },
  {
    level: "5",
    name: "Stroke Consolidation",
    age: "7+ yrs",
    description: "Swimming all four strokes competently and building endurance — a real milestone in the journey to competitive swimming.",
    skills: [
      "Swim 100m using all four strokes",
      "Butterfly 10m",
      "Competitive turns — front crawl & backstroke",
      "Timed 25m front crawl",
      "Personal survival skills",
    ],
  },
  {
    level: "6",
    name: "Skill Refinement",
    age: "8+ yrs",
    description: "Refining technique across all four strokes, increasing distances and introducing competitive starts and turns.",
    skills: [
      "Swim 400m using all four strokes",
      "Butterfly 25m",
      "Improved competitive turns & starts",
      "Tumble turns",
      "Timed swims across all strokes",
    ],
  },
  {
    level: "7",
    name: "Performance Swimming",
    age: "9+ yrs",
    description: "Club-ready competitive swimming — all four strokes with polished technique, race starts and a focus on performance.",
    skills: [
      "Swim 800m using all four strokes",
      "Competitive starts from the block",
      "Turns & finishes to competition standard",
      "Personal survival over distance",
      "Ready to join competitive squad",
    ],
    clubReady: true,
  },
];

interface FormData {
  childName: string;
  childAge: string;
  parentName: string;
  email: string;
  phone: string;
  level: string;
  message: string;
}

export default function LearnToSwim() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    phone: "",
    level: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        sectionLabel="Learn"
        SectionIcon={Waves}
        accentColor="#ea580c"
        title="Learn to Swim"
        subtitle="Our structured programme takes children from complete beginners right through to club-ready competitive swimmers."
        backgroundImage={learnImage}
      />

      {/* Stages / Teachers / etc below hero */}
      <SectionLayout>
        {/* Stages section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                The Programme
              </span>
              <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Seven stages to swimming excellence
              </h2>
              <p className="mt-3 text-[#0d2240]/60 max-w-xl text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                We follow the official Swim England Learn to Swim programme — a nationally recognised pathway from first splash to competition-ready.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stages.map((stage) => {
                const isClubReady = (stage as any).clubReady;
                return (
                  <div
                    key={stage.level}
                    className={`relative bg-[#f5f8fc] rounded-2xl p-6 border-t-4 ${isClubReady ? "border-[#0d2240] sm:col-span-2 lg:col-span-3 bg-[#0d2240]/[0.03]" : "border-[#cc1e1e]"}`}
                  >
                    <div
                      className={`absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm ${isClubReady ? "bg-[#0d2240]" : "bg-[#cc1e1e]"}`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {stage.level}
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-[#0d2240]/50 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>{stage.age}</span>
                        {isClubReady && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0d2240] text-white text-[10px] rounded-full uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                            <Star size={9} /> Club Ready
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>
                        {stage.name}
                      </h3>
                      <p className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {stage.description}
                      </p>
                      <ul className={`mt-4 space-y-1.5 ${isClubReady ? "sm:columns-2" : ""}`}>
                        {stage.skills.map((skill) => (
                          <li key={skill} className="flex items-center gap-2 text-sm text-[#0d2240]/70 break-inside-avoid" style={{ fontFamily: "Inter, sans-serif" }}>
                            <CheckCircle size={13} className={`shrink-0 ${isClubReady ? "text-[#0d2240]" : "text-[#cc1e1e]"}`} />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Payment nudge */}
        <PaymentNudge context="Learn to Swim lesson fees" />
      </SectionLayout>

      {/* CTA */}
      <section className="bg-[#0d2240] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Ready to Join?
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Sign up for a free trial and start your swimming journey today.
          </p>
          <Link
            to="/join"
            className="mt-6 inline-block px-6 py-3 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-xl font-semibold transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Request a Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}