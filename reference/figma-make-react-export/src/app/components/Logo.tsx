// Club logo — replace this SVG with the actual club logo image when available.
// The original logo can be found at: https://cannockswimmingclub.org
interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", size = "md" }: LogoProps) {
  const sizes = { sm: 36, md: 48, lg: 64 };
  const px = sizes[size];

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={px}
        height={px}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cannock Phoenix Swimming Club crest"
      >
        {/* Outer circle */}
        <circle cx="32" cy="32" r="31" fill="#0d2240" stroke={variant === "light" ? "#ffffff" : "#0d2240"} strokeWidth="2" />
        {/* Wave at bottom */}
        <path
          d="M8 44 Q16 40 24 44 Q32 48 40 44 Q48 40 56 44 L56 54 Q48 58 40 54 Q32 50 24 54 Q16 58 8 54 Z"
          fill="#cc1e1e"
          opacity="0.85"
        />
        {/* Stylised phoenix flame */}
        <path
          d="M32 8 C28 14 22 16 24 22 C22 20 20 22 22 26 C20 24 18 27 21 30 C24 33 28 31 30 35 C31 37 32 40 32 40 C32 40 33 37 34 35 C36 31 40 33 43 30 C46 27 44 24 42 26 C44 22 42 20 40 22 C42 16 36 14 32 8Z"
          fill="#cc1e1e"
        />
        {/* Inner flame highlight */}
        <path
          d="M32 14 C30 18 27 19 28 23 C27 21 26 22.5 27.5 25 C26 24 25 26 27 28 C29 30 31 29 32 32 C33 29 35 30 37 28 C39 26 38 24 36.5 25 C38 22.5 37 21 36 23 C37 19 34 18 32 14Z"
          fill="#ffffff"
          opacity="0.3"
        />
        {/* CPSC text */}
        <text
          x="32"
          y="49"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="7"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          letterSpacing="1"
        >
          CPSC
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`text-xs tracking-widest uppercase ${variant === "light" ? "text-white/80" : "text-[#0d2240]/70"}`}
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem" }}
        >
          Cannock Phoenix
        </span>
        <span
          className={`tracking-wide ${variant === "light" ? "text-white" : "text-[#0d2240]"}`}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.85rem",
            fontWeight: 800,
          }}
        >
          Swimming Club
        </span>
      </div>
    </div>
  );
}
