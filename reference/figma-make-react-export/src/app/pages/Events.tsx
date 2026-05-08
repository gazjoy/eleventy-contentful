import { CalendarDays, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

const poolSurface =
  "https://images.unsplash.com/photo-1769490315056-fd1bb6832239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB3YXRlciUyMHN1cmZhY2UlMjBibHVlfGVufDF8fHx8MTc3NDQ2MDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080";

// Parse short month from date string
function getMonth(dateStr: string) {
  const months: Record<string, string> = {
    January: "Jan", February: "Feb", March: "Mar", April: "Apr",
    May: "May", June: "Jun", July: "Jul", August: "Aug",
    September: "Sep", October: "Oct", November: "Nov", December: "Dec",
  };
  for (const [full, short] of Object.entries(months)) {
    if (dateStr.includes(full)) return short;
  }
  return "";
}

function getDay(dateStr: string) {
  const match = dateStr.match(/\d+/);
  return match ? match[0] : "";
}

function getYear(dateStr: string) {
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : "";
}

const galas = [
  {
    id: 1,
    name: "Storm Trident Open Meet 2026",
    date: "7 June 2026",
    time: "09:00 – 17:00",
    location: "Cannock Chase Leisure Centre",
    address: "Auctioneers Way, Cannock, WS11 1AB",
    blurb: "Our home open meet returns for 2026. Hosted by Cannock Phoenix, Storm Trident is open to all Swim England registered clubs. Events across all ages and stroke groups, with heats and finals format. Entries managed via your coach.",
    link: "#",
  },
  {
    id: 2,
    name: "Staffordshire County Championships",
    date: "14 March 2026",
    time: "08:30 – 18:00",
    location: "Stafford Gatehouse Pool",
    address: "Beaconside, Stafford, ST18 0PF",
    blurb: "The county's premier short course championships. Qualifying times required — speak to your coach about your target events and whether you're on track to qualify this season.",
    link: "#",
  },
  {
    id: 3,
    name: "Midland Region Junior Championships",
    date: "19 April 2026",
    time: "08:00 – 17:30",
    location: "Coventry Sports & Leisure Centre",
    address: "Fairfax St, Coventry, CV1 5RY",
    blurb: "Regional junior championships for swimmers who have achieved county qualifying times. One of the biggest meets in the region — always a fantastic atmosphere.",
    link: "#",
  },
  {
    id: 4,
    name: "CPSC Club Night & End of Season Awards",
    date: "21 September 2026",
    time: "18:30 – 21:30",
    location: "Cannock Chase Leisure Centre",
    address: "Auctioneers Way, Cannock, WS11 1AB",
    blurb: "Our end-of-season celebration and awards evening. All members, parents, and volunteers welcome.",
    link: "#",
  },
];

export default function Events() {
  return (
    <div>
      <PageHero
        sectionLabel="Club Events"
        SectionIcon={CalendarDays}
        accentColor="#16a34a"
        title="Galas & Events"
        subtitle="Our competitive calendar for the season. Gala entries are managed by coaches — speak to your squad coach about qualifying times and selection."
        backgroundImage={poolSurface}
      />
      {/* Events content — hero ends above this line */}
      <SectionLayout>
        {/* Upcoming events */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-6">
              {galas.map((gala, index) => (
                <div
                  key={gala.id}
                  className={`bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg transition-shadow ${index === 0 ? "ring-2 ring-[#cc1e1e]" : ""}`}
                >
                  {index === 0 && (
                    <div className="bg-[#cc1e1e] text-white text-xs text-center py-1.5 uppercase tracking-widest font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      ⚡ Next Up
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    {/* Date block */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#0d2240] rounded-2xl px-5 py-4 min-w-[70px] text-center">
                      <span className="text-white/60 text-xs uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>
                        {getMonth(gala.date)}
                      </span>
                      <span className="text-white font-black leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem" }}>
                        {getDay(gala.date)}
                      </span>
                      <span className="text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                        {getYear(gala.date)}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h2 className="text-[#0d2240]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.3rem" }}>
                        {gala.name}
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#0d2240]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#cc1e1e]" />
                          {gala.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#cc1e1e]" />
                          {gala.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#cc1e1e]" />
                          {gala.date}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#0d2240]/40 flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                        <MapPin size={11} />
                        {gala.address}
                      </p>
                      <p className="mt-3 text-[#0d2240]/65 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {gala.blurb}
                      </p>
                      {gala.link && gala.link !== "#" && (
                        <a
                          href={gala.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                        >
                          Event Details <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-10 bg-[#0d2240]/5 border border-[#0d2240]/10 rounded-2xl p-6 text-center">
              <p className="text-[#0d2240]/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong className="text-[#0d2240]">Squad members:</strong> Gala entries are submitted by coaches. Please ensure your membership is up to date and speak to your coach about your target events for this season. Qualification times and entry deadlines are shared via the club communication channels.
              </p>
            </div>
          </div>
        </section>
      </SectionLayout>
    </div>
  );
}