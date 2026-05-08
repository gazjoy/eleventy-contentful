import { Link } from "react-router";
import { Mail, MapPin, Facebook, Twitter, Instagram, Lock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#0a1b30] text-white">
      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 24 Q180 0 360 24 Q540 48 720 24 Q900 0 1080 24 Q1260 48 1440 24 L1440 48 L0 48 Z"
            fill="#0a1b30"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              A non-profit swimming club based in Cannock, Staffordshire. Established 1980. Supporting local swimmers
              of all abilities on their journey in the water.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cc1e1e] flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cc1e1e] flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cc1e1e] flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#cc1e1e] mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Club
            </h4>
            <ul className="space-y-2 text-sm text-white/65" style={{ fontFamily: "Inter, sans-serif" }}>
              {[
                { label: "About Us", to: "/about" },
                { label: "Our History", to: "/history" },
                { label: "Club Committee", to: "/about/committee" },
                { label: "Events & Galas", to: "/events" },
                { label: "News", to: "/news" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#cc1e1e] mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm text-white/65" style={{ fontFamily: "Inter, sans-serif" }}>
              {[
                { label: "Request a Trial", to: "/join" },
                { label: "Learn to Swim", to: "/learn-to-swim" },
                { label: "Competitive Squad", to: "/competitive-squad" },
                { label: "Fundraising", to: "/fundraising" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#cc1e1e] mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/65" style={{ fontFamily: "Inter, sans-serif" }}>
              <li className="flex gap-2 items-start">
                <MapPin size={15} className="mt-0.5 text-[#cc1e1e] shrink-0" />
                <span>Cannock Chase Leisure Centre,<br />Auctioneers Way, Cannock, WS11 1AB</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={15} className="text-[#cc1e1e] shrink-0" />
                <a href="mailto:info@cannockphoenixsc.org" className="hover:text-white transition-colors">
                  info@cannockphoenixsc.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Swim England affiliation band ────────────────────────── */}
        <div className="border-t border-white/10 py-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Logo */}
          <div className="shrink-0 bg-white rounded-2xl px-7 py-4">
            <img
              src="https://d1s9j44aio5gjs.cloudfront.net/2017/02/Swim_England_500x159px.gif"
              alt="Swim England"
              className="h-10 w-auto"
            />
          </div>
          {/* Tagline */}
          <p className="text-white/55 text-sm leading-relaxed text-center sm:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
            From first splash to podium finish. A proud{" "}
            <a
              href="https://www.swimming.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Swim England
            </a>{" "}
            affiliated, non-profit club supporting young swimmers in Staffordshire since 1980.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
          <p>© {new Date().getFullYear()} Cannock Phoenix Swimming Club. Registered Non-Profit. Est. 1980.</p>
          <div className="flex items-center gap-4">
            <Link to="/payments" className="flex items-center gap-1.5 text-emerald-400/70 hover:text-emerald-400 transition-colors">
              <Lock size={11} />
              Pay Fees Securely
            </Link>
            <p>
              Affiliated with{" "}
              <a href="https://www.swimming.org" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">
                Swim England
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}