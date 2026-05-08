import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { newsItems } from "../data/clubData";
import { NewsArchiveSidebar } from "../components/NewsArchiveSidebar";

const categoryColour: Record<string, string> = {
  Results: "bg-[#cc1e1e] text-white",
  "Learn to Swim": "bg-blue-600 text-white",
  Community: "bg-emerald-600 text-white",
  "Club News": "bg-[#0d2240] text-white",
};

function getYear(dateStr: string) {
  return parseInt(dateStr.trim().split(" ")[2]);
}

export default function NewsPost() {
  const { id } = useParams<{ id: string }>();
  const post = newsItems.find((p) => p.id === id);

  if (!post) {
    return (
      <div
        className="min-h-[60vh] flex items-center justify-center gap-2 text-[#0d2240]/40"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Post not found.
        <Link to="/news" className="text-[#cc1e1e] hover:underline ml-1">
          Back to News
        </Link>
      </div>
    );
  }

  const postIndex  = newsItems.findIndex((p) => p.id === id);
  const prevPost   = postIndex < newsItems.length - 1 ? newsItems[postIndex + 1] : null;
  const nextPost   = postIndex > 0 ? newsItems[postIndex - 1] : null;
  const initialYear = getYear(post.date);

  return (
    <div>
      {/* ── Slim hero ────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-14 bg-[#0d2240] text-white overflow-hidden">
        {post.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-5 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <ArrowLeft size={14} /> Back to News
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs ${categoryColour[post.category] ?? "bg-gray-600 text-white"}`}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {post.category}
            </span>
            <span className="text-white/45 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              {post.date}
            </span>
          </div>
          <h1
            className="text-white max-w-3xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 32" fill="none" className="w-full">
            <path d="M0 16 Q360 0 720 16 Q1080 32 1440 16 L1440 32 L0 32 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Two-column body ──────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-12 items-start">

            {/* ── Sidebar ─────────────────────────────────────────── */}
            <aside className="hidden lg:flex flex-col w-52 xl:w-60 shrink-0 sticky top-[72px] self-start gap-5">
              <Link
                to="/news"
                className="flex items-center gap-2 text-[#0d2240]/45 hover:text-[#0d2240] text-sm transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <ArrowLeft size={14} /> All news
              </Link>
              <NewsArchiveSidebar
                initialYear={initialYear}
                showRecentPosts
                currentPostId={id}
              />
            </aside>

            {/* ── Article ──────────────────────────────────────────── */}
            <article className="flex-1 min-w-0 max-w-2xl">

              {/* Feature image — only if the post has one */}
              {post.image && (
                <div className="rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: "16/7" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Standfirst / excerpt */}
              <p
                className="mb-6 text-[#0d2240] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
              >
                {post.excerpt}
              </p>

              {/* Body paragraphs */}
              {(post.body ?? []).map((para, i) => (
                <p
                  key={i}
                  className="mb-5 text-[#0d2240]/68 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {para}
                </p>
              ))}

              {/* Footer meta */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${categoryColour[post.category] ?? "bg-gray-600 text-white"}`}
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {post.category}
                </span>
                <span
                  className="text-[#0d2240]/35 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Published {post.date}
                </span>
              </div>

              {/* ── Prev / Next ──────────────────────────────────── */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    to={`/news/${prevPost.id}`}
                    className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#0d2240]/12 hover:bg-[#f5f8fc] transition-all"
                  >
                    <ArrowLeft
                      size={15}
                      className="text-[#0d2240]/22 group-hover:text-[#cc1e1e] mt-0.5 shrink-0 transition-colors"
                    />
                    <div>
                      <p
                        className="text-[#0d2240]/35 text-xs mb-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Older post
                      </p>
                      <p
                        className="text-[#0d2240] line-clamp-2 group-hover:text-[#cc1e1e] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                      >
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    to={`/news/${nextPost.id}`}
                    className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#0d2240]/12 hover:bg-[#f5f8fc] transition-all sm:flex-row-reverse sm:text-right"
                  >
                    <ArrowRight
                      size={15}
                      className="text-[#0d2240]/22 group-hover:text-[#cc1e1e] mt-0.5 shrink-0 transition-colors"
                    />
                    <div>
                      <p
                        className="text-[#0d2240]/35 text-xs mb-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Newer post
                      </p>
                      <p
                        className="text-[#0d2240] line-clamp-2 group-hover:text-[#cc1e1e] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                      >
                        {nextPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
