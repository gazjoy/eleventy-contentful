import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Clock, ExternalLink, ChevronRight } from "lucide-react";
import { galas, newsItems } from "../data/clubData";

const heroImage =
  "https://images.unsplash.com/photo-1669185694564-2da287319e13?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const poolSurface =
  "https://images.unsplash.com/photo-1769490315056-fd1bb6832239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB3YXRlciUyMHN1cmZhY2UlMjBibHVlfGVufDF8fHx8MTc3NDQ2MDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080";

const learnImage =
  "https://images.unsplash.com/photo-1761589871820-b9cfbfb5d853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwdG8lMjBzd2ltJTIwcG9vbHxlbnwxfHx8fDE3NzQ0NjA5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const squadImage =
  "https://images.unsplash.com/photo-1621354559364-b7404d160bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltJTIwdGVhbSUyMHRyYWluaW5nJTIwY29hY2glMjBwb29sc2lkZXxlbnwxfHx8fDE3NzQ0NjA5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const nextGala = galas[0];

const categoryColour: Record<string, string> = {
  Results: "bg-[#cc1e1e] text-white",
  "Learn to Swim": "bg-blue-600 text-white",
  Community: "bg-emerald-600 text-white",
  "Club News": "bg-[#0d2240] text-white",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2240]/80 via-[#0d2240]/60 to-[#0d2240]/90" />
        {/* Animated water shimmer */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
            backgroundSize: "100% 8px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
          {/* Club badge label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6 text-xs uppercase tracking-widest text-white/80"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#cc1e1e] animate-pulse" />
            Est. 1980 · Cannock, Staffordshire
          </div>

          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Cannock Phoenix
            <br />
            <span className="text-[#cc1e1e]">Swimming Club</span>
          </h1>

          <p
            className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            Inspiring every swimmer — from first splash to podium finish. A proud non-profit club supporting
            Cannock's young swimmers since 1980.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learn-to-swim"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full transition-all duration-200 shadow-xl hover:shadow-[#cc1e1e]/40 hover:-translate-y-0.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem" }}
            >
              Request a Trial
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white rounded-full border border-white/30 transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem" }}
            >
              Find Out More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 32 Q180 0 360 32 Q540 64 720 32 Q900 0 1080 32 Q1260 64 1440 32 L1440 64 L0 64 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1980", label: "Founded" },
            { value: "50+", label: "Members" },
            { value: "45", label: "Years of Swimming" },
            { value: "Non-Profit", label: "Community Club" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-[#cc1e1e]"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-[#0d2240]/60 text-sm uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────────── */}
      <section className="bg-[#f5f8fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={poolSurface} alt="Swimming pool" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#0d2240] text-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <p className="text-3xl font-black text-[#cc1e1e]" style={{ fontFamily: "Montserrat, sans-serif" }}>45</p>
              <p className="text-xs text-white/70 uppercase tracking-wider mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Years Strong</p>
            </div>
          </div>

          <div>
            <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              About the Club
            </span>
            <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}>
              Born from community,<br />built on ambition
            </h2>
            <p className="mt-4 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Cannock Phoenix Swimming Club has been nurturing talent in the Staffordshire swimming community
              since 1980. What started as a small local group has grown into a thriving non-profit club of over
              50 members, supporting swimmers from their very first lesson right through to competitive racing.
            </p>
            <p className="mt-3 text-[#0d2240]/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              We believe every child deserves the confidence and joy that comes from being a competent swimmer —
              and for those with the fire to compete, we provide a pathway to achieve their potential.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-[#cc1e1e] font-semibold hover:gap-3 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn more about us <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our Programmes
            </span>
            <h2 className="mt-2 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              A pathway for every swimmer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Learn to Swim */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={learnImage}
                  alt="Child learning to swim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2240]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#cc1e1e] text-white text-xs rounded-full uppercase tracking-wider" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    Beginners Welcome
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.35rem" }}>
                  Learn to Swim
                </h3>
                <p className="mt-2 text-[#0d2240]/65 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  From water confidence for young beginners through to club-ready swimming — our structured programme gives children the skills, safety and love of the water to thrive.
                </p>
                <Link
                  to="/learn-to-swim"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#cc1e1e] text-white text-sm rounded-full transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  Find out more <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Competitive Squad */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={squadImage}
                  alt="Competitive swim squad training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2240]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#cc1e1e] text-white text-xs rounded-full uppercase tracking-wider" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    Competitive
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.35rem" }}>
                  Competitive Squad
                </h3>
                <p className="mt-2 text-[#0d2240]/65 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  For swimmers ready to race. Our competitive squad trains regularly with experienced coaches and competes at regional galas, giving young athletes a genuine pathway to progress.
                </p>
                <Link
                  to="/competitive-squad"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#cc1e1e] text-white text-sm rounded-full transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  Find out more <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEXT GALA ────────────────────────────────────────────────── */}
      <section className="bg-[#0d2240] py-20 relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #cc1e1e 0%, transparent 60%), radial-gradient(circle at 80% 50%, #1a6fa3 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Next Event
            </span>
            <h2 className="mt-2 text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
              Coming Up
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Date block */}
              <div className="flex-shrink-0 bg-[#cc1e1e] rounded-2xl p-5 text-center min-w-[80px]">
                <p className="text-white/80 text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Apr</p>
                <p className="text-white font-black leading-none" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.2rem" }}>26</p>
                <p className="text-white/80 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>2026</p>
              </div>

              <div className="flex-1">
                <h3 className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.6rem" }}>
                  {nextGala.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-4 text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#cc1e1e]" />
                    {nextGala.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#cc1e1e]" />
                    {nextGala.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#cc1e1e]" />
                    {nextGala.date}
                  </span>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {nextGala.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {nextGala.link && (
                    <a
                      href={nextGala.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      Event Info <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white text-sm rounded-full transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    Full Calendar <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWS PREVIEW ─────────────────────────────────────────────── */}
      <section className="bg-[#f5f8fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#cc1e1e] text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Latest News
              </span>
              <h2 className="mt-1 text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Club Updates
              </h2>
            </div>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#0d2240] hover:text-[#cc1e1e] font-semibold transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              All news <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs ${categoryColour[item.category] ?? "bg-gray-600 text-white"}`}
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#0d2240]/40 text-xs mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.date}
                  </p>
                  <h3 className="text-[#0d2240] leading-snug" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#0d2240]/60 text-sm leading-relaxed line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.excerpt}
                  </p>
                  <Link
                    to="/news"
                    className="mt-4 inline-flex items-center gap-1 text-[#cc1e1e] text-sm font-semibold hover:gap-2 transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Read more <ChevronRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0d2240] text-[#0d2240] rounded-full font-semibold text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              All news <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d2240 0%, #1a3a5c 50%, #0d2240 100%)",
        }}
      >
        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 24 Q180 0 360 24 Q540 48 720 24 Q900 0 1080 24 Q1260 48 1440 24 L1440 48 L0 48 Z" fill="#f5f8fc" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Ready to <span className="text-[#cc1e1e]">dive in?</span>
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}>
            Whether your child is taking their first dip or looking to join our competitive squad,
            we'd love to welcome you to the Phoenix family. Request a trial session today — it's free
            and no-obligation.
          </p>
          <Link
            to="/learn-to-swim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#cc1e1e] hover:bg-[#a81818] text-white rounded-full shadow-xl hover:shadow-[#cc1e1e]/40 transition-all hover:-translate-y-0.5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem" }}
          >
            Request a Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}