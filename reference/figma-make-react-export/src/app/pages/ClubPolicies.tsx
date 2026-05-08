import {
  FileText,
  Download,
  File,
  Shield,
  Users,
  Camera,
  Lock,
  Mail,
  ExternalLink,
  Clock,
} from "lucide-react";
import { Link } from "react-router";
import { SectionLayout } from "../components/SectionLayout";
import { PageHero } from "../components/PageHero";

type FileFormat = "pdf" | "docx";

interface PolicyDocument {
  title: string;
  description: string;
  fileType: FileFormat;
  version: string;
  updated: string;
  /** true = download button active; false = coming soon */
  available: boolean;
}

interface PolicyCategory {
  id: string;
  label: string;
  blurb: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  documents: PolicyDocument[];
}

const categories: PolicyCategory[] = [
  {
    id: "safeguarding",
    label: "Safeguarding",
    blurb: "Policies protecting the welfare of children and vulnerable adults in our care.",
    icon: Shield,
    accentColor: "#cc1e1e",
    documents: [
      {
        title: "Child Safeguarding Policy",
        description:
          "Our commitment to the safety and welfare of every child in our care, aligned with Swim England's safeguarding guidelines and the national standards for child protection in sport.",
        fileType: "pdf",
        version: "v2.1",
        updated: "September 2024",
        available: true,
      },
      {
        title: "Anti-Bullying Policy",
        description:
          "Zero tolerance of bullying in any form — on poolside, in changing areas, online, or at galas.",
        fileType: "pdf",
        version: "v1.3",
        updated: "September 2024",
        available: true,
      },
    ],
  },
  {
    id: "conduct",
    label: "Codes of Conduct",
    blurb: "Expected standards of behaviour for everyone associated with the club.",
    icon: Users,
    accentColor: "#0d2240",
    documents: [
      {
        title: "Code of Conduct — Swimmers",
        description:
          "Expected behaviour for all competitive and Learn to Swim members, covering training sessions, galas, social media, and travel.",
        fileType: "docx",
        version: "v2.0",
        updated: "September 2024",
        available: true,
      },
      {
        title: "Code of Conduct — Parents & Spectators",
        description:
          "How we expect parents, carers, and spectators to conduct themselves at sessions, galas, and club events.",
        fileType: "docx",
        version: "v2.0",
        updated: "September 2024",
        available: true,
      },
      {
        title: "Code of Conduct — Coaches & Volunteers",
        description:
          "Professional standards and responsibilities for all coaches, teachers, and volunteers at the club.",
        fileType: "docx",
        version: "v1.4",
        updated: "September 2024",
        available: false,
      },
    ],
  },
  {
    id: "privacy",
    label: "Privacy & Photography",
    blurb: "How we collect and use member data, and rules governing photography at the club.",
    icon: Camera,
    accentColor: "#7c3aed",
    documents: [
      {
        title: "Photography & Social Media Policy",
        description:
          "Rules governing photography of swimmers and the use of images on social media to protect children's privacy and dignity.",
        fileType: "pdf",
        version: "v1.2",
        updated: "January 2024",
        available: true,
      },
      {
        title: "GDPR & Data Privacy Policy",
        description:
          "How we collect, store, use, and protect member data in compliance with UK GDPR and the Data Protection Act 2018.",
        fileType: "pdf",
        version: "v1.1",
        updated: "March 2024",
        available: true,
      },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    blurb: "Club constitution and operational documents.",
    icon: Lock,
    accentColor: "#0891b2",
    documents: [
      {
        title: "Club Constitution",
        description:
          "The founding document that sets out the club's purpose, membership rules, and governance structure.",
        fileType: "pdf",
        version: "v3.0",
        updated: "October 2023",
        available: false,
      },
    ],
  },
];

function FormatBadge({ type }: { type: FileFormat }) {
  if (type === "pdf") {
    return (
      <span
        className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-red-50 text-red-700 border border-red-200"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, letterSpacing: "0.04em" }}
      >
        PDF
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-200"
      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, letterSpacing: "0.04em" }}
    >
      DOCX
    </span>
  );
}

function FileIcon({ type, available }: { type: FileFormat; available: boolean }) {
  const opacity = available ? "" : "opacity-50";
  if (type === "pdf") {
    return (
      <div className={`w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 ${opacity}`}>
        <FileText size={18} className="text-red-500" />
      </div>
    );
  }
  return (
    <div className={`w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 ${opacity}`}>
      <File size={18} className="text-blue-500" />
    </div>
  );
}

export default function ClubPolicies() {
  const handleDownload = (title: string) => {
    // TODO: replace with actual file URL once documents are uploaded
    alert(
      `"${title}" — download link will be active once the document is uploaded. Contact the Club Secretary in the meantime.`
    );
  };

  return (
    <div>
      <PageHero
        sectionLabel="Our Club"
        SectionIcon={FileText}
        accentColor="#db2777"
        title="Club Policies"
        subtitle="Our governing policies, codes of conduct, and legal documentation. Download any document below."
      />

      <SectionLayout>
        <section className="py-12 px-4 sm:px-6 lg:px-10">

          {/* ── Intro notice ─────────────────────────────────────────── */}
          <div className="bg-[#f5f8fc] border border-[#0d2240]/10 rounded-2xl p-5 mb-10 flex items-start gap-3">
            <FileText size={15} className="text-[#0d2240]/40 shrink-0 mt-0.5" />
            <p className="text-[#0d2240]/65 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Documents are provided as PDF or Word files (DOCX). Documents marked{" "}
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                Coming Soon
              </span>{" "}
              are being finalised — contact the Club Secretary to request an advance copy. For safeguarding
              concerns, visit our{" "}
              <Link to="/welfare" className="text-[#cc1e1e] hover:text-[#a81818] font-semibold transition-colors">
                Welfare & Concerns
              </Link>{" "}
              page.
            </p>
          </div>

          {/* ── Policy categories ────────────────────────────────────── */}
          <div className="space-y-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: cat.accentColor + "18" }}
                    >
                      <Icon size={17} style={{ color: cat.accentColor }} />
                    </div>
                    <div>
                      <h2
                        className="text-[#0d2240]"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem" }}
                      >
                        {cat.label}
                      </h2>
                      <p className="text-[#0d2240]/45 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        {cat.blurb}
                      </p>
                    </div>
                  </div>

                  {/* Document rows */}
                  <div className="space-y-2.5">
                    {cat.documents.map((doc) => (
                      <div
                        key={doc.title}
                        className={`flex items-start sm:items-center gap-4 rounded-2xl p-5 border transition-all ${
                          doc.available
                            ? "bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-[#0d2240]/10"
                            : "bg-gray-50 border-gray-100"
                        }`}
                      >
                        {/* File icon */}
                        <FileIcon type={doc.fileType} available={doc.available} />

                        {/* Document info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <p
                              className={`text-sm ${doc.available ? "text-[#0d2240]" : "text-[#0d2240]/50"}`}
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              {doc.title}
                            </p>
                            <FormatBadge type={doc.fileType} />
                            {!doc.available && (
                              <span
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-amber-50 text-amber-700 border border-amber-200"
                                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                              >
                                <Clock size={10} />
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p
                            className="text-[#0d2240]/55 text-xs leading-relaxed"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {doc.description}
                          </p>
                          <p className="mt-1 text-[#0d2240]/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                            {doc.version} · Updated {doc.updated}
                          </p>
                        </div>

                        {/* Download / unavailable button */}
                        {doc.available ? (
                          <button
                            type="button"
                            onClick={() => handleDownload(doc.title)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#0d2240] hover:bg-[#1a3a5c] text-white text-sm rounded-xl transition-colors shrink-0 shadow-sm"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            <Download size={14} />
                            <span className="hidden sm:inline">Download</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm rounded-xl cursor-not-allowed shrink-0"
                            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                          >
                            <Download size={14} />
                            <span className="hidden sm:inline">Unavailable</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Request unlisted documents ───────────────────────────── */}
          <div className="mt-12 bg-[#0d2240] rounded-2xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={16} className="text-white/80" />
              </div>
              <div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.95rem" }}
                >
                  Need a document that's not listed?
                </h3>
                <p
                  className="mt-2 text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Additional governance documents — including AGM minutes, insurance certificates, and the
                  club's Swim England affiliation — are available on request from the Club Secretary.
                </p>
                <a
                  href="mailto:secretary@cannockswimmingclub.org"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors border border-white/15"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  <Mail size={13} />
                  secretary@cannockswimmingclub.org
                </a>
              </div>
            </div>
          </div>

          {/* ── Swim England link ────────────────────────────────────── */}
          <div className="mt-6">
            <a
              href="https://www.swimming.org/swimengland/welfare-and-safeguarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0d2240]/45 hover:text-[#0d2240] text-sm transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <ExternalLink size={13} />
              View Swim England national policies and safeguarding resources
            </a>
          </div>

        </section>
      </SectionLayout>
    </div>
  );
}
