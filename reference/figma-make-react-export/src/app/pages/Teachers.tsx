import { BadgeCheck, ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const teachers = [
  {
    name: "Aidan Bolas",
    role: "Head Teacher",
    qualifications: [
      "Swim England Level 1 & 2 ASA Teacher",
      "Lifeguard Qualified",
      "Former Lifeguard Training Instructor",
      "DBS Enhanced Checked",
    ],
    bio: "Aidan has been teaching swimming since the age of 16 and has built a career that spans council lesson programmes, private swim schools, and one-to-one adult lessons. He first came to the club as a competitive swimmer himself before transitioning into teaching, ultimately taking on the role of Head Teacher and overseeing the entire Learn to Swim programme. Aidan holds Swim England Level 1 and 2 ASA teaching qualifications, is lifeguard qualified, and was formerly a lifeguard training instructor — giving him an exceptional depth of knowledge in both water safety and technique delivery. He sits on the club committee, where he oversees all matters relating to staffing and the lessons programme, ensuring the highest possible standards for every child in our care.",
    photo: "https://images.unsplash.com/photo-1586731023793-871d4799d0ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3dpbSUyMGNvYWNoJTIwaW5zdHJ1Y3RvciUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NjQ0MDQyN3ww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Rachel Hewitt",
    role: "Learn to Swim Teacher",
    qualifications: [
      "Swim England Level 1 & 2 Teacher",
      "Paediatric First Aid",
      "DBS Enhanced Checked",
    ],
    bio: "Rachel has been teaching children to swim for over eight years, beginning her career with Staffordshire County Council's leisure programme before gaining experience across several private swim schools in the region. She holds Swim England Level 1 and 2 teaching qualifications alongside a current Paediatric First Aid certificate, and is DBS enhanced checked. Rachel is especially valued for her calm, patient manner with nervous beginners and younger children — creating a reassuring environment where confidence grows quickly. Her ability to connect with children of all abilities has made her a firm favourite with both parents and pupils alike.",
    photo: "https://images.unsplash.com/photo-1668800458317-34ef5976c422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlYWNoZXIlMjBzcG9ydCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NjQ0MDQyNHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Daniel Foster",
    role: "Learn to Swim Teacher",
    qualifications: [
      "Swim England Level 2 Teacher",
      "RLSS Lifeguard Qualified",
      "DBS Enhanced Checked",
    ],
    bio: "Daniel joined Cannock Phoenix after four years delivering swimming lessons at Cannock Chase and Lichfield leisure centres, where he built a strong reputation for structured, technique-focused teaching. A Swim England Level 2 qualified teacher and RLSS registered lifeguard, Daniel has a particular strength in Stages 3 and 4 — helping swimmers refine their strokes to the point where they are genuinely ready to step into competitive training. His methodical and encouraging style means that many of his pupils have gone on to join the competitive squad, and he takes real pride in seeing that progression happen. Parents consistently describe him as approachable, reliable and excellent with children.",
    photo: "https://images.unsplash.com/photo-1601579548337-4ceb9ecd65c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBmaXRuZXNzJTIwY29hY2glMjBhdGhsZXRpYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQ0MDQyNHww&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export default function Teachers() {
  return (
    <div>
      <PageHero
        sectionLabel="Learn"
        SectionIcon={GraduationCap}
        accentColor="#0891b2"
        title="Our Teachers"
        subtitle="Licensed, passionate, and fully committed to nurturing every child's confidence and ability in the water."
      />

      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">
          <div className="mb-10">
            <span
              className="text-[#cc1e1e] text-xs uppercase tracking-widest font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              The Team
            </span>
            <h2
              className="mt-1 text-[#0d2240]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
            >
              Meet our teaching staff
            </h2>
            <p
              className="mt-2 text-[#0d2240]/60 max-w-xl text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every teacher on our programme holds current Swim England qualifications, is DBS enhanced checked, and is passionate about helping children build confidence in the water.
            </p>
          </div>

          <div className="max-w-4xl divide-y divide-gray-100">
            {teachers.map((t) => (
              <div key={t.name} className="flex gap-6 py-10 first:pt-0 last:pb-0">
                {/* Photo */}
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
                    >
                      {t.name}
                    </h3>
                    <span
                      className="text-[#cc1e1e] text-xs"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {t.role}
                    </span>
                  </div>
                  {/* Qualification badges */}
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {t.qualifications.map((q) => (
                      <div key={q} className="flex items-center gap-1.5">
                        <BadgeCheck size={12} className="text-emerald-600 shrink-0" />
                        <span
                          className="text-[#0d2240]/50 text-xs"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {q}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-3 text-[#0d2240]/65 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {t.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-[#f5f8fc] rounded-2xl border border-[#0d2240]/8 flex items-center justify-between gap-4">
            <p
              className="text-[#0d2240]/65 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Interested in the Learn to Swim programme? See our stages, progression pathway, and how to enrol.
            </p>
            <Link
              to="/learn-to-swim"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors shrink-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Learn to Swim <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}