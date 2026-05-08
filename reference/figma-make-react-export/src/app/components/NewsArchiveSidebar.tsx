import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ChevronDown, Newspaper } from "lucide-react";
import { newsItems } from "../data/clubData";

const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseDate(dateStr: string) {
  const parts = dateStr.trim().split(" ");
  return { day: parseInt(parts[0]), month: parts[1], year: parseInt(parts[2]) };
}

function buildArchive() {
  const map: Record<number, Record<string, number>> = {};
  for (const item of newsItems) {
    const { year, month } = parseDate(item.date);
    if (!map[year]) map[year] = {};
    map[year][month] = (map[year][month] || 0) + 1;
  }
  return Object.keys(map)
    .map(Number)
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      total: Object.values(map[year]).reduce((a, b) => a + b, 0),
      months: MONTH_ORDER.filter((m) => map[year][m])
        .reverse()
        .map((m) => ({ name: m, count: map[year][m] })),
    }));
}

interface NewsArchiveSidebarProps {
  /** Year to expand on first render. Defaults to active URL year, then most recent. */
  initialYear?: number;
  /** Render a Recent Posts list below the archive */
  showRecentPosts?: boolean;
  /** Exclude this post ID from the Recent Posts list */
  currentPostId?: string;
}

export function NewsArchiveSidebar({
  initialYear,
  showRecentPosts = false,
  currentPostId,
}: NewsArchiveSidebarProps) {
  const [searchParams] = useSearchParams();
  const activeYear = searchParams.get("year") ? parseInt(searchParams.get("year")!) : null;
  const activeMonth = searchParams.get("month") ?? null;

  const archive = buildArchive();
  const defaultYear = initialYear ?? activeYear ?? archive[0]?.year;

  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>(
    defaultYear ? { [defaultYear]: true } : {}
  );

  function toggleYear(year: number) {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  }

  const recentPosts = showRecentPosts
    ? newsItems.filter((p) => p.id !== currentPostId).slice(0, 5)
    : [];

  return (
    <div className="flex flex-col gap-6">
      {/* ── Archive ──────────────────────────────────────────────── */}
      <div className="bg-[#f5f8fc] rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <p
            className="text-[#0d2240]/40 text-xs uppercase tracking-wider"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
          >
            Archive
          </p>
          {(activeYear || activeMonth) && (
            <Link
              to="/news"
              className="text-xs text-[#cc1e1e] hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Clear filter
            </Link>
          )}
        </div>

        {/* All posts */}
        <Link
          to="/news"
          className={`flex items-center px-3 py-2 rounded-xl text-sm transition-colors mb-1 ${
            !activeYear && !activeMonth
              ? "bg-white shadow-sm text-[#0d2240]"
              : "text-[#0d2240]/55 hover:bg-white hover:text-[#0d2240]"
          }`}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: !activeYear && !activeMonth ? 600 : 400,
          }}
        >
          All posts
        </Link>

        {/* Year groups */}
        <div className="space-y-0.5">
          {archive.map(({ year, total, months }) => {
            const isYearActive = activeYear === year && !activeMonth;
            const isYearOpen = expandedYears[year];
            return (
              <div key={year}>
                <button
                  onClick={() => toggleYear(year)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors text-sm ${
                    isYearActive ? "bg-white shadow-sm" : "hover:bg-white"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span
                    className={isYearActive ? "text-[#0d2240]" : "text-[#0d2240]/65"}
                    style={{ fontWeight: isYearActive ? 700 : 600 }}
                  >
                    {year}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0d2240]/28 text-xs">{total}</span>
                    <ChevronDown
                      size={13}
                      className={`text-[#0d2240]/28 transition-transform duration-200 ${
                        isYearOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Month links */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isYearOpen ? `${months.length * 36}px` : "0" }}
                >
                  <div className="ml-2 space-y-0.5 pt-0.5 pb-1">
                    {months.map(({ name, count }) => {
                      const isActive = activeYear === year && activeMonth === name;
                      return (
                        <Link
                          key={name}
                          to={`/news?year=${year}&month=${name}`}
                          className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors ${
                            isActive
                              ? "text-[#cc1e1e] bg-white"
                              : "text-[#0d2240]/50 hover:bg-white hover:text-[#0d2240]"
                          }`}
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: isActive ? 600 : 400,
                          }}
                        >
                          <span>{name}</span>
                          <span
                            className={isActive ? "text-[#cc1e1e]/50" : "text-[#0d2240]/25"}
                          >
                            {count}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Recent Posts ─────────────────────────────────────────── */}
      {showRecentPosts && recentPosts.length > 0 && (
        <div>
          <p
            className="text-[#0d2240]/40 text-xs uppercase tracking-wider mb-3 px-1"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
          >
            Recent Posts
          </p>
          <div className="space-y-4">
            {recentPosts.map((rp) => (
              <Link
                key={rp.id}
                to={`/news/${rp.id}`}
                className="group flex gap-3 items-start"
              >
                {/* Thumbnail or placeholder */}
                {rp.image ? (
                  <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-lg shrink-0 bg-[#0d2240]/8 flex items-center justify-center">
                    <Newspaper size={16} className="text-[#0d2240]/25" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[#0d2240] leading-snug group-hover:text-[#cc1e1e] transition-colors line-clamp-2"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.8rem" }}
                  >
                    {rp.title}
                  </p>
                  <p
                    className="text-[#0d2240]/35 text-xs mt-0.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {rp.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
