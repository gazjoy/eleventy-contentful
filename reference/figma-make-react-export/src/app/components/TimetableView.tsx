import { type ComponentType } from "react";
import { Clock, Info, Droplets, Dumbbell, MapPin } from "lucide-react";
import { SectionLayout } from "./SectionLayout";
import { PageHero } from "./PageHero";
import { type Session, type Venue, SQUAD_COLOR, DAY_ORDER, venueSlug } from "../data/timetableData";

interface TimetableViewProps {
  sessions: Session[];
  venues: Venue[];
  sectionLabel: string;
  SectionIcon: ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  title: string;
  subtitle: string;
  infoText: string;
  backgroundImage?: string;
}

export function TimetableView({
  sessions,
  venues,
  sectionLabel,
  SectionIcon,
  accentColor,
  title,
  subtitle,
  infoText,
  backgroundImage,
}: TimetableViewProps) {
  // Only show days that have at least one session in this filtered set
  const activeDays = DAY_ORDER.filter((d) => sessions.some((s) => s.day === d));

  // Only show squad colours relevant to this filtered set
  const activeGroups = [...new Set(sessions.map((s) => s.group))];

  return (
    <div>
      <PageHero
        sectionLabel={sectionLabel}
        SectionIcon={SectionIcon}
        accentColor={accentColor}
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />

      <SectionLayout>
        {/* ── Colour key ─────────────────────────────────────────── */}
        <section className="pt-10 pb-2 px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 items-center">
            <span
              className="text-[#0d2240]/40 text-xs uppercase tracking-wider mr-1"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              Programme
            </span>
            {activeGroups.map((name) => {
              const c = SQUAD_COLOR[name];
              if (!c) return null;
              return (
                <span
                  key={name}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    backgroundColor: c.bg,
                    color: c.text,
                    borderColor: c.border,
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </section>

        {/* ── Info banner ────────────────────────────────────────── */}
        <section className="pt-4 pb-2 px-4 sm:px-6 lg:px-10">
          <div className="flex items-start gap-3 bg-[#f5f8fc] border border-[#0d2240]/10 rounded-xl px-5 py-4">
            <Info size={15} className="text-[#0d2240]/45 shrink-0 mt-0.5" />
            <p
              className="text-[#0d2240]/60 text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {infoText}
            </p>
          </div>
        </section>

        {/* ── Sessions by day ────────────────────────────────────── */}
        <section className="py-8 px-4 sm:px-6 lg:px-10">
          <div className="space-y-7">
            {activeDays.map((day) => {
              const daySessions = sessions.filter((s) => s.day === day);
              return (
                <div key={day}>
                  {/* Day heading */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-lg text-white text-xs uppercase tracking-wider shrink-0"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        backgroundColor: "#0d2240",
                      }}
                    >
                      {day}
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>

                  {/* Session rows */}
                  <div className="space-y-2">
                    {daySessions.map((s, i) => {
                      const squadStyle = SQUAD_COLOR[s.group];
                      const slug = venueSlug(s.venue);
                      return (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 px-4 py-3.5">
                            {/* Time */}
                            <div className="flex items-center gap-2 sm:w-36 shrink-0">
                              <Clock size={13} className="text-[#0d2240]/30 shrink-0" />
                              <span
                                className="text-[#0d2240] whitespace-nowrap"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontWeight: 600,
                                  fontSize: "0.85rem",
                                }}
                              >
                                {s.time}
                              </span>
                            </div>

                            {/* Squad badge */}
                            <span
                              className="shrink-0 inline-block px-2.5 py-0.5 rounded-full text-xs border"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 600,
                                backgroundColor: squadStyle.bg,
                                color: squadStyle.text,
                                borderColor: squadStyle.border,
                              }}
                            >
                              {s.group}
                            </span>

                            {/* Session type */}
                            <span
                              className="shrink-0 inline-flex items-center gap-1 text-xs"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 500,
                                color: s.land ? "#92400e" : "#0d224055",
                              }}
                            >
                              {s.land
                                ? <><Dumbbell size={11} /> Land Training</>
                                : <><Droplets size={11} /> Swimming</>}
                            </span>

                            {/* Venue — anchor link */}
                            <div className="flex items-center gap-1.5 sm:ml-auto shrink-0">
                              <MapPin size={12} className="text-[#0d2240]/35 shrink-0" />
                              <a
                                href={`#${slug}`}
                                className="text-sm text-[#0d2240]/55 hover:text-[#0d2240] hover:underline transition-colors"
                                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                              >
                                {s.venue}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Where We Train ─────────────────────────────────────── */}
        <section className="py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-100">
          <div className="mb-8">
            <span
              className="text-[#cc1e1e] text-xs uppercase tracking-widest font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Venues
            </span>
            <h2
              className="mt-1 text-[#0d2240]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
            >
              Where we train
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {venues.map((v) => (
              <div
                key={v.slug}
                id={v.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-mt-20"
              >
                {/* Map embed */}
                <div className="w-full h-52 bg-gray-100">
                  <iframe
                    title={v.name}
                    src={v.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Info row */}
                <div className="px-5 py-4 flex flex-col gap-3">
                  <div>
                    <h3
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem" }}
                    >
                      {v.name}
                    </h3>
                    <p
                      className="mt-0.5 text-[#0d2240]/45 text-sm flex items-center gap-1.5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <MapPin size={12} className="shrink-0" />
                      {v.address}
                    </p>
                  </div>

                  {/* Squad tags — only show groups relevant to this timetable */}
                  <div className="flex flex-wrap gap-1.5">
                    {v.squads
                      .filter((g) => activeGroups.includes(g))
                      .map((g) => {
                        const sq = SQUAD_COLOR[g];
                        return (
                          <span
                            key={g}
                            className="text-xs px-2 py-0.5 rounded-full border"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 600,
                              backgroundColor: sq.bg,
                              color: sq.text,
                              borderColor: sq.border,
                            }}
                          >
                            {g}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}