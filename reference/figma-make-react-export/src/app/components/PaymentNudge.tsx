import { Link } from "react-router";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";

interface PaymentNudgeProps {
  /** Short description of what the payment covers on this page */
  context?: string;
}

/**
 * A compact trust-first banner nudging parents to set up their Direct Debit.
 * Drop this into any page where fees are relevant.
 */
export function PaymentNudge({ context = "monthly membership fees" }: PaymentNudgeProps) {
  return (
    <section className="bg-[#f5f8fc] border-y border-[#0d2240]/8 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <Lock size={17} className="text-emerald-700" />
            </div>
            <div>
              <p
                className="text-[#0d2240]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Set up your Direct Debit — it takes under 2 minutes
              </p>
              <p
                className="text-[#0d2240]/55 text-xs mt-0.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Pay your {context} securely via GoCardless · Protected by the Direct Debit Guarantee
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-600" />
              <span
                className="text-[#0d2240]/50 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                FCA regulated
              </span>
            </div>
            <Link
              to="/payments"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-full transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Lock size={13} />
              Pay Securely
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
