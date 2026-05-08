import { type ComponentType } from "react";

interface PageHeroProps {
  /** e.g. "Our Club", "Our Pathway" */
  sectionLabel: string;
  /** Lucide icon for the parent section */
  SectionIcon: ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  /** Hex accent colour for the icon square and icon itself */
  accentColor: string;
  /** Page heading */
  title: string;
  /** Optional subtitle beneath the heading */
  subtitle?: string;
  /** Optional background photo (adds 20% opacity overlay instead of stripe) */
  backgroundImage?: string;
  /** Optional extra content below subtitle (badges, trust signals, etc.) */
  children?: React.ReactNode;
  /** Fill colour for the bottom wave SVG – match the first section below */
  waveColor?: string;
}

export function PageHero({
  sectionLabel,
  SectionIcon,
  accentColor,
  title,
  subtitle,
  backgroundImage,
  children,
  waveColor = "white",
}: PageHeroProps) {
  return (
    <div className="relative pt-28 pb-14 bg-[#0d2240] text-white overflow-hidden">

      {/* ── Background: photo overlay OR diagonal stripe ── */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Parent section label */}
        <span
          className="text-white/50 text-xs uppercase tracking-widest"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
        >
          {sectionLabel}
        </span>

        {/* Icon + page title */}
        <div className="mt-2 flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: accentColor + "20" }}
          >
            <SectionIcon size={22} style={{ color: accentColor }} />
          </div>
          <h1
            className="text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-3 text-white/60 max-w-xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {subtitle}
          </p>
        )}

        {/* Extra slot (badges, trust signals, etc.) */}
        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 32" fill="none" className="w-full">
          <path
            d="M0 16 Q360 0 720 16 Q1080 32 1440 16 L1440 32 L0 32 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    </div>
  );
}
