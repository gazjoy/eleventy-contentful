import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft, ArrowRight, Building2, ChevronDown, Newspaper } from "lucide-react";
import { newsItems } from "../data/clubData";
import { NewsArchiveSidebar } from "../components/NewsArchiveSidebar";
import { PageHero } from "../components/PageHero";

const PER_PAGE = 5;

const categoryColour: Record<string, string> = {
  Results: "bg-[#cc1e1e] text-white",
  "Learn to Swim": "bg-blue-600 text-white",
  Community: "bg-emerald-600 text-white",
  "Club News": "bg-[#0d2240] text-white",
};

const MONTH_ORDER = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function parseDate(dateStr: string) {
  const parts = dateStr.trim().split(" ");
  return { month: parts[1], year: parseInt(parts[2]) };
}

export default function News() {
  const [searchParams] = useSearchParams();
  const [mobileArchiveOpen, setMobileArchiveOpen] = useState(false);

  const activeYear  = searchParams.get("year")  ? parseInt(searchParams.get("year")!)  : null;
  const activeMonth = searchParams.get("month") ?? null;
  const page        = Math.max(1, parseInt(searchParams.get("page") ?? "1"));

  /** Build a /news URL preserving current params + overrides (null = delete). */
  function buildUrl(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams);
    for (const [key, val] of Object.entries(updates)) {
      if (val === null) params.delete(key);
      else params.set(key, val);
    }
    const str = params.toString();
    return `/news${str ? `?${str}` : ""}`;
  }

  // Filter
  const filtered = newsItems.filter((item) => {
    const { year, month } = parseDate(item.date);
    if (activeYear  && year  !== activeYear)  return false;
    if (activeMonth && month !== activeMonth) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage   = Math.min(page, totalPages);
  const paginated  = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  // Human-readable filter label
  const filterLabel = activeMonth && activeYear
    ? `${activeMonth} ${activeYear}`
    : activeYear
    ? String(activeYear)
    : null;

  const rangeStart = (safePage - 1) * PER_PAGE + 1;
  const rangeEnd   = Math.min(safePage * PER_PAGE, filtered.length);

  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={Building2}
        accentColor="#db2777"
        title="Club News"
        subtitle="Results, announcements, swimmer spotlights and everything happening at Phoenix."
      />

      {/* ── Body ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* ── Mobile archive collapsible ───────────────────────── */}
          <div className="lg:hidden mb-8 border border-gray-100 rounded-2xl overflow-hidden">
            <button
              onClick={() => setMobileArchiveOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left"
            >
              <div className="flex items-center gap-2">
                <Newspaper size={14} className="text-[#0d2240]/40" />
                <span
                  className="text-sm text-[#0d2240]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {filterLabel ? `Filtered: ${filterLabel}` : "Browse by archive"}
                </span>
              </div>
              <ChevronDown
                size={15}
                className={`text-[#0d2240]/35 transition-transform duration-200 ${
                  mobileArchiveOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: mobileArchiveOpen ? "600px" : "0" }}
            >
              <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                <NewsArchiveSidebar />
              </div>
            </div>
          </div>

          {/* ── Two-column layout ────────────────────────────────── */}
          <div className="flex gap-12 items-start">

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block w-52 xl:w-60 shrink-0 sticky top-[72px] self-start">
              <NewsArchiveSidebar />
            </aside>

            {/* Feed column */}
            <div className="flex-1 min-w-0">

              {/* Count + filter label */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-gray-100">
                <p
                  className="text-[#0d2240]/45 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {filtered.length === 0
                    ? "No posts found"
                    : `Showing ${rangeStart}–${rangeEnd} of ${filtered.length} post${filtered.length !== 1 ? "s" : ""}${filterLabel ? ` · ${filterLabel}` : ""}`}
                </p>
                {filterLabel && (
                  <Link
                    to="/news"
                    className="text-xs text-[#cc1e1e] hover:underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Clear filter
                  </Link>
                )}
              </div>

              {/* Empty state */}
              {filtered.length === 0 && (
                <div
                  className="py-20 text-center text-[#0d2240]/35"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  No posts found for this period.
                </div>
              )}

              {/* ── Article list ───────────────────────────────── */}
              {paginated.map((item, i) => (
                <article
                  key={item.id}
                  className={`py-8 ${i < paginated.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs ${categoryColour[item.category] ?? "bg-gray-600 text-white"}`}
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                    >
                      {item.category}
                    </span>
                    <span className="text-[#0d2240]/25 text-sm select-none">·</span>
                    <span
                      className="text-[#0d2240]/40 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* Mobile image (full-width, shown above title on small screens) */}
                  {item.image && (
                    <Link to={`/news/${item.id}`} className="sm:hidden block mb-4 rounded-xl overflow-hidden h-44">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  )}

                  {/* Content row */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-1 min-w-0">
                      <Link to={`/news/${item.id}`}>
                        <h2
                          className="text-[#0d2240] hover:text-[#cc1e1e] transition-colors leading-snug"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                          }}
                        >
                          {item.title}
                        </h2>
                      </Link>
                      <p
                        className="mt-2 text-[#0d2240]/60 leading-relaxed line-clamp-3"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.excerpt}
                      </p>
                      <Link
                        to={`/news/${item.id}`}
                        className="mt-3 inline-flex items-center gap-1 text-[#cc1e1e] text-sm hover:underline"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        Read more <ArrowRight size={13} />
                      </Link>
                    </div>

                    {/* Thumbnail — desktop, right side */}
                    {item.image && (
                      <Link
                        to={`/news/${item.id}`}
                        className="hidden sm:block shrink-0 w-44 h-28 rounded-xl overflow-hidden group"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                    )}
                  </div>
                </article>
              ))}

              {/* ── Pagination ─────────────────────────────────── */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-8 mt-4 border-t border-gray-100">
                  {/* Previous */}
                  {safePage > 1 ? (
                    <Link
                      to={buildUrl({ page: safePage === 2 ? null : String(safePage - 1) })}
                      className="flex items-center gap-2 text-sm text-[#0d2240]/50 hover:text-[#0d2240] transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <ArrowLeft size={14} /> Previous
                    </Link>
                  ) : (
                    <span
                      className="flex items-center gap-2 text-sm text-[#0d2240]/20 cursor-not-allowed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <ArrowLeft size={14} /> Previous
                    </span>
                  )}

                  {/* Page numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        to={buildUrl({ page: p === 1 ? null : String(p) })}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors ${
                          p === safePage
                            ? "bg-[#0d2240] text-white"
                            : "text-[#0d2240]/45 hover:bg-[#0d2240]/8 hover:text-[#0d2240]"
                        }`}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: p === safePage ? 700 : 400,
                        }}
                      >
                        {p}
                      </Link>
                    ))}
                  </div>

                  {/* Next */}
                  {safePage < totalPages ? (
                    <Link
                      to={buildUrl({ page: String(safePage + 1) })}
                      className="flex items-center gap-2 text-sm text-[#0d2240]/50 hover:text-[#0d2240] transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Next <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span
                      className="flex items-center gap-2 text-sm text-[#0d2240]/20 cursor-not-allowed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Next <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}