import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { getSectionByPath } from "../data/navigation";

interface SectionLayoutProps {
  children: React.ReactNode;
}

/**
 * Wraps page content (below the hero) with:
 * - Desktop: sticky left sidebar listing all sibling pages in the current section
 * - Mobile: a collapsible "In this section" strip pinned just below the navbar
 *
 * If the current path belongs to no section the children are rendered as-is.
 */
export function SectionLayout({ children }: SectionLayoutProps) {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const section = getSectionByPath(location.pathname);

  if (!section) return <>{children}</>;

  const currentPage = section.pages.find(
    (p) => location.pathname === p.to || location.pathname.startsWith(p.to + "/")
  );

  return (
    <div>
      {/* ── Mobile section strip (sticky, below 60 px navbar) ─── */}
      <div className="lg:hidden sticky top-[60px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 text-left"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-expanded={drawerOpen}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: section.accentColor + "20" }}
            >
              <section.icon size={11} style={{ color: section.accentColor }} />
            </div>
            <span
              className="text-[#0d2240]/50 text-xs shrink-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {section.label}
            </span>
            <ChevronRight size={12} className="text-[#0d2240]/30 shrink-0" />
            <span
              className="text-[#0d2240] text-xs truncate"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {currentPage?.label ?? ""}
            </span>
          </div>
          <ChevronDown
            size={14}
            className={`text-[#0d2240]/40 shrink-0 transition-transform duration-200 ${drawerOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Drawer */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: drawerOpen ? "24rem" : 0 }}
        >
          <nav className="grid grid-cols-2 gap-1 px-3 pb-3">
            {section.pages.map((page) => {
              const isActive =
                location.pathname === page.to ||
                location.pathname.startsWith(page.to + "/");
              return (
                <Link
                  key={page.to}
                  to={page.to}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#0d2240]/65 hover:text-[#0d2240] hover:bg-[#0d2240]/5"
                  }`}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    backgroundColor: isActive ? section.accentColor : undefined,
                  }}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Desktop layout ─────────────────────────────────────── */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Sidebar — stretches to full content height */}
            <aside className="w-52 xl:w-60 shrink-0 bg-[#f5f8fc] border-r border-gray-200 rounded-t-2xl">
              {/* Sticky inner nav */}
              <div className="sticky top-[60px] max-h-[calc(100vh-60px)] overflow-y-auto pt-10 pb-16 px-4">
                {/* Section label */}
                <div className="flex items-center gap-2 px-3 mb-4">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: section.accentColor + "18" }}
                  >
                    <section.icon size={13} style={{ color: section.accentColor }} />
                  </div>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      color: section.accentColor,
                    }}
                  >
                    {section.label}
                  </span>
                </div>

                {/* Page links */}
                <nav className="space-y-0.5">
                  {section.pages.map((page) => {
                    const isActive =
                      location.pathname === page.to ||
                      location.pathname.startsWith(page.to + "/");
                    return (
                      <Link
                        key={page.to}
                        to={page.to}
                        className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                          isActive
                            ? "text-white shadow-sm"
                            : "text-[#0d2240]/60 hover:text-[#0d2240] hover:bg-[#0d2240]/5"
                        }`}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: isActive ? 600 : 400,
                          backgroundColor: isActive ? section.accentColor : undefined,
                        }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                            isActive
                              ? "bg-white/70"
                              : "bg-[#0d2240]/20 group-hover:bg-[#0d2240]/40"
                          }`}
                        />
                        {page.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0 bg-white">
              {children}
            </main>
          </div>
        </div>
      </div>

      {/* Mobile content (no sidebar) */}
      <div className="lg:hidden">
        {children}
      </div>
    </div>
  );
}