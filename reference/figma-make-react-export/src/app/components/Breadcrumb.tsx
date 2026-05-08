import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Reusable breadcrumb for sub-pages.
 * Pass items in order: parent → ... → current page.
 * The last item is treated as the current page (no link).
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight size={13} className="text-[#0d2240]/30 shrink-0" />
              )}
              {isLast || !item.to ? (
                <span
                  className={`text-xs ${isLast ? "text-[#0d2240]/50" : "text-[#0d2240]/70"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-xs text-[#0d2240]/70 hover:text-[#cc1e1e] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
