import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const coaches = [
  {
    name: "Wayne Davies",
    role: "Head Coach",
    qualifications: "Swim England Level 3 Senior Coach · National Para Coach · SE Talent Coach",
    photo: "https://images.unsplash.com/photo-1774009304081-ca87dd2f5d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3dpbW1pbmclMjBjb2FjaCUyMHBvb2xzaWRlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDk1NjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Wayne oversees all competitive swimming at Cannock Phoenix. He began his coaching career at Dove Valley SC, progressing from poolside helper to Head Coach over three years, before spending six years at City of Derby SC where he developed the squad from regional to Midlands level — working alongside notable swimmers including Greg Butler and Megan Neave. Wayne has accumulated extensive experience through Swim England and England Talent Programme camps since 2015, taking on roles including skills coach, development coach and Para swimmer classifier. His ambition for the club is to introduce cutting-edge training methods, develop regional and national swimmers, and ultimately produce British champions.",
    squad: "All Squads",
  },
  {
    name: "Anne Smith",
    role: "Assistant Coach & Judge",
    qualifications: "Swim England Level 2 Teacher · Assistant Coach · Judge Level 2 · Starter Qualified",
    photo: "https://images.unsplash.com/photo-1585323524394-1c14827edd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwd29tYW4lMjBzcG9ydCUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDk1NjI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Anne has been part of the Phoenix family since 2000, when her daughter first joined the club — making her one of our longest-serving and most trusted members. A former competitive swimmer with Burntwood, she joined the coaching team three years after her daughter started, progressing through her Swim England qualifications to become a Level 2 Teacher and, most recently, an Assistant Coach. Anne is also a qualified and active competition judge at Judge Level 2 with a Starter qualification, regularly officiating at meets and leagues. She brings warmth, experience and a deep commitment to making the club a place where swimmers thrive.",
    squad: "Learn to Swim & Pre-Squad",
  },
  {
    name: "Milly Davies",
    role: "Squad Coach — Blue Squad",
    qualifications: "Swim England Level 2 Teacher",
    photo: "https://images.unsplash.com/photo-1669627960958-b4a809aa76ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3dpbSUyMGNvYWNoJTIwYXRobGV0ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDk1NjI4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Milly's connection to swimming runs deeper than most. After contracting meningitis at the age of five, she used swimming as a key part of her rehabilitation — a journey that ignited a lifelong passion for the sport. She went on to swim competitively for Dove Valley before beginning her coaching career at City of Derby SC. Now a qualified Swim England Level 2 Teacher, Milly leads Blue Squad at Cannock Phoenix with a clear purpose: to build strong technical foundations and set every swimmer on a successful competitive path from the very start.",
    squad: "Pre-Squad",
  },
  {
    name: "Rick Walton",
    role: "Squad Coach",
    qualifications: "Swim England Level 1 & 2 Coach · Judge Level 1",
    photo: "https://images.unsplash.com/photo-1625568223330-4dd947e6aedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzd2ltbWluZyUyMGluc3RydWN0b3IlMjBwb29sJTIwc3BvcnR8ZW58MXx8fHwxNzc0OTU2MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Rick's involvement in swimming began when his eldest child joined Wyre Forrest SC. Originally qualifying as a competition judge, his passion for the sport led him to pursue coaching, and he holds Swim England Level 1 and 2 coaching qualifications with Level 3 study planned for the coming year. Rick also serves as Head Coach at Wyre Forrest SC, supported by his own coaching team there. He brings a grounded, holistic perspective to his work at Cannock Phoenix — believing that the skills developed in the pool should equip swimmers for life well beyond it.",
    squad: "Junior Squad",
  },
  {
    name: "Matt Lowe",
    role: "Senior Coach",
    qualifications: "Swim England Level 3 Coach · Former National-Level Competitor",
    photo: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3BvcnQlMjBjb2FjaCUyMGZpdG5lc3MlMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0OTU2Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "A Swim England Level 3 Coach, Matt brings extensive head coaching experience from Bromsgrove SC (2016–2022) and Leicester Sharks (2022–2023). As a swimmer, he competed at national level, reaching age group finals in 100m and 200m Breaststroke and 200m and 400m Individual Medley. After a period away from poolside to focus on his own swimming, Matt returned to coaching in early 2025, joining Cannock Phoenix after meeting with the club's leadership and finding a shared vision. His ambition is straightforward but ambitious: for CPSC to be known for technical excellence across all four strokes, and for every swimmer to leave the club not just as a better swimmer, but as a better person.",
    squad: "Junior & Senior Squad",
  },
];

export default function Coaches() {
  return (
    <div>
      <PageHero
        sectionLabel="Compete"
        SectionIcon={Users}
        accentColor="#ea580c"
        title="Our Coaches"
        subtitle="Licensed, passionate, and fully committed to developing the next generation of competitive swimmers."
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
              Meet the coaching staff
            </h2>
            <p
              className="mt-2 text-[#0d2240]/60 max-w-xl text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our coaches bring a wealth of competitive and teaching experience. All hold current Swim England qualifications and are DBS checked.
            </p>
          </div>

          <div className="max-w-4xl divide-y divide-gray-100">
            {coaches.map((coach) => (
              <div key={coach.name} className="flex gap-6 py-10 first:pt-0 last:pb-0">
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100">
                  <img
                    src={coach.photo}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
                    >
                      {coach.name}
                    </h3>
                    <span
                      className="text-[#cc1e1e] text-xs"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {coach.role}
                    </span>
                    <span
                      className="px-2 py-0.5 bg-[#0d2240]/8 text-[#0d2240]/60 text-xs rounded-full uppercase tracking-wider"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {coach.squad}
                    </span>
                  </div>
                  <p
                    className="mt-0.5 text-[#0d2240]/40 text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {coach.qualifications}
                  </p>
                  <p
                    className="mt-3 text-[#0d2240]/65 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {coach.bio}
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
              Want to know more about our squads, training structure, and how to join?
            </p>
            <Link
              to="/competitive-squad"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors shrink-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Competitive Squads <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}