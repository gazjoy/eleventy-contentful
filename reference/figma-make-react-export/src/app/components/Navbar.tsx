import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Newspaper, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { navSections, newsLink } from "../data/navigation";

export function Navbar() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenSection(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenSection(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSection(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const toggleSection = (id: string) =>
    setOpenSection((prev) => (prev === id ? null : id));

  const isSectionActive = (id: string) => {
    const s = navSections.find((s) => s.id === id);
    return !!s?.pages.some(
      (p) => location.pathname === p.to || location.pathname.startsWith(p.to + "/")
    );
  };

  const navBg =
    isHome && !scrolled && !openSection
      ? "bg-transparent"
      : "bg-[#0d2240] shadow-lg";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        {/* ── Main bar ───────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[60px]">
            {/* Logo */}
            <Link to="/" className="shrink-0" onClick={() => setOpenSection(null)}>
              <Logo variant="light" size="md" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navSections.map((section) => {
                const isActive = isSectionActive(section.id);
                const isOpen = openSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm select-none transition-all duration-150 ${
                      isOpen
                        ? "bg-white/15 text-white"
                        : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: isActive || isOpen ? 600 : 400,
                    }}
                  >
                    {section.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                to="/join"
                className="inline-flex items-center px-5 py-2 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors shadow-md"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Request a Trial
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Desktop dropdown panels ─────────────────────── */}
        {navSections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              role="region"
              aria-label={`${section.label} menu`}
              className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl"
              style={{
                top: "100%",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                pointerEvents: isOpen ? "auto" : "none",
                transition: "opacity 0.18s ease, transform 0.18s ease",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">

                {/* Section identity + page links */}
                <div className="flex gap-10 xl:gap-14">
                  {/* Section identity */}
                  <div className="w-52 shrink-0 pt-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: section.accentColor + "18" }}
                    >
                      <section.icon size={20} style={{ color: section.accentColor }} />
                    </div>
                    <p
                      className="text-[#0d2240]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.95rem" }}
                    >
                      {section.label}
                    </p>
                    <p
                      className="mt-1 text-[#0d2240]/50 text-sm leading-snug"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {section.description}
                    </p>
                  </div>

                  {/* Page links grid */}
                  <div
                    className={`flex-1 grid gap-1 ${
                      section.pages.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 xl:grid-cols-3"
                    }`}
                  >
                    {section.pages.map((page) => {
                      const isActive =
                        location.pathname === page.to ||
                        location.pathname.startsWith(page.to + "/");
                      return (
                        <Link
                          key={page.to}
                          to={page.to}
                          onClick={() => setOpenSection(null)}
                          className={`group flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-all ${
                            isActive ? "bg-[#0d2240]/7" : "hover:bg-[#0d2240]/5"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm ${
                                isActive
                                  ? "text-[#0d2240]"
                                  : "text-[#0d2240]/80 group-hover:text-[#0d2240]"
                              }`}
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: isActive ? 600 : 500,
                              }}
                            >
                              {page.label}
                            </span>
                            {page.badge === "new" && (
                              <span
                                className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full"
                                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.65rem" }}
                              >
                                New
                              </span>
                            )}
                          </div>
                          <span
                            className="text-[#0d2240]/40 leading-snug"
                            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                          >
                            {page.description}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* ── end flex row ── */}

                {/* Club News featured strip — Our Club dropdown only */}
                {section.id === "club" && (
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      to={newsLink.to}
                      onClick={() => setOpenSection(null)}
                      className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${
                        location.pathname.startsWith("/news")
                          ? "bg-[#db2777]/8"
                          : "bg-[#db2777]/5 hover:bg-[#db2777]/10"
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#db277718" }}
                      >
                        <Newspaper size={16} style={{ color: "#db2777" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[#0d2240]"
                          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                        >
                          Club News
                        </p>
                        <p
                          className="text-[#0d2240]/45 leading-snug"
                          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                        >
                          Results, announcements and everything happening at Phoenix
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "#db2777" }}
                      />
                    </Link>
                  </div>
                )}

              </div>
            </div>
          );
        })}

        {/* ── Mobile menu ─────────────────────────────────── */}
        <div
          className={`lg:hidden bg-[#0d2240] border-t border-white/10 overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-0.5">
            {navSections.map((section) => {
              const isActive = isSectionActive(section.id);
              const isExpanded = mobileExpanded === section.id;
              return (
                <div key={section.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((prev) =>
                        prev === section.id ? null : section.id
                      )
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors ${
                      isActive || isExpanded
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: isActive ? 600 : 400 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <section.icon
                        size={15}
                        style={{ color: section.accentColor }}
                        className="shrink-0"
                      />
                      {section.label}
                    </div>
                    <ChevronDown
                      size={14}
                      className={`opacity-50 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Sub-links */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-3 pb-1 pt-0.5 space-y-0.5">
                      {section.pages.map((page) => {
                        const isPageActive = location.pathname === page.to;
                        return (
                          <Link
                            key={page.to}
                            to={page.to}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                              isPageActive
                                ? "bg-white/12 text-white"
                                : "text-white/60 hover:text-white hover:bg-white/8"
                            }`}
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: isPageActive ? 600 : 400 }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0 mt-px"
                              style={{
                                backgroundColor: isPageActive
                                  ? section.accentColor
                                  : "rgba(255,255,255,0.25)",
                              }}
                            />
                            {page.label}
                          </Link>
                        );
                      })}
                      {/* Club News — at the bottom of the Our Club accordion */}
                      {section.id === "club" && (
                        <Link
                          to={newsLink.to}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                            location.pathname.startsWith("/news")
                              ? "bg-white/12 text-white"
                              : "text-white/60 hover:text-white hover:bg-white/8"
                          }`}
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: location.pathname.startsWith("/news") ? 600 : 400,
                          }}
                        >
                          <Newspaper
                            size={12}
                            className="shrink-0"
                            style={{
                              color: location.pathname.startsWith("/news")
                                ? "#db2777"
                                : "rgba(255,255,255,0.4)",
                            }}
                          />
                          Club News
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="pt-3 pb-2">
              <Link
                to="/join"
                className="flex items-center justify-center w-full py-3 bg-[#cc1e1e] hover:bg-[#a81818] text-white text-sm rounded-full transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Request a Trial
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/25 transition-opacity duration-200"
        style={{
          top: "60px",
          opacity: openSection ? 1 : 0,
          pointerEvents: openSection ? "auto" : "none",
        }}
        onClick={() => setOpenSection(null)}
      />
    </>
  );
}
