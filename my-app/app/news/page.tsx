"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { FaArrowRight, FaNewspaper } from "react-icons/fa";

import { newsArticles } from "./data";

const categories = ["All", "Company Update", "Industry Insight", "Awards & Recognition", "Culture"];

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    "Company Update": "bg-blue-500/10 text-blue-300 border-blue-500/20",
    "Industry Insight": "bg-purple-500/10 text-purple-300 border-purple-500/20",
    "Awards & Recognition": "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    Culture: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  };
  return colors[category] || "bg-white/10 text-white/80 border-white/20";
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllNews, setShowAllNews] = useState(false);

  const filteredNews =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((n) => n.category === activeCategory);

  const visibleNews = showAllNews ? filteredNews : filteredNews.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#f2be2f]/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-900/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Latest Updates</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Company News & <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Insights.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Stay up to date with the latest announcements, industry insights, and
            culture highlights from the Building Construction Co. team.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-10">
            {[
              ["20+", "Years of Excellence"],
              ["15", "Industry Awards"],
              ["500+", "Team Members"],
            ].map(([value, label]) => (
              <div key={label} className="p-4">
                <div className="text-3xl font-black text-[#f2be2f] mb-2">{value}</div>
                <div className="text-[0.65rem] font-bold text-white/50 uppercase tracking-[0.2em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative z-40 mt-8 mb-4">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllNews(false);
                }}
                className={`rounded-full px-6 py-3 text-[0.7rem] font-black uppercase tracking-[0.15em] transition-all duration-500 ${cat === activeCategory
                    ? "bg-[#f2be2f] text-[#0f141c] shadow-[0_10px_30px_rgba(242,190,47,0.3)] scale-105 border border-[#f2be2f]"
                    : "bg-[#1a2330]/80 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section id="news-grid" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {filteredNews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center reveal-up">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#1a2330] border border-white/10 text-4xl mb-6 shadow-2xl">
              <FaNewspaper className="text-white/20" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">No news found</h3>
            <p className="max-w-md text-white/50 text-lg mb-8">
              No articles match the selected category. Try selecting a different
              category or view all news.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="inline-flex h-12 items-center rounded-2xl bg-[#f2be2f] px-8 text-sm font-black text-[#0f141c] transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(242,190,47,0.2)]"
            >
              View All News
            </button>
          </div>
        ) : (
          <>
            <div className="stagger-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleNews.map((article, i) => (
                <article
                  key={article.title}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-[#1a2330] border border-white/5 hover:border-[#f2be2f]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[#f2be2f]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330] via-[#1a2330]/40 to-transparent z-20" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-30">
                      <span className={`px-3 py-1.5 rounded-lg border text-[0.65rem] font-black uppercase tracking-widest backdrop-blur-md ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 relative z-30 bg-[#1a2330] flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[0.65rem] font-bold text-white/50 uppercase tracking-widest mb-4">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#f2be2f]"></span>
                      <span className="text-[#f2be2f]">{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-black text-white mb-4 group-hover:text-[#f2be2f] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="leading-relaxed text-white/60 text-sm flex-1 mb-8">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <Link href={`/news/${article.slug}`} className="text-sm font-bold text-white group-hover:text-[#f2be2f] transition-colors z-40 relative before:absolute before:inset-[-20px] before:content-['']">
                        Read Article
                      </Link>
                      <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#f2be2f] group-hover:border-[#f2be2f] group-hover:text-[#0f141c] transition-all duration-300">
                        <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredNews.length > 6 && (
              <div className="mt-16 flex justify-center reveal-up">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllNews) {
                      const element = document.getElementById("news-grid");
                      if (element) {
                        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }
                    setShowAllNews(!showAllNews);
                  }}
                  className="inline-flex h-14 items-center rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold text-white hover:bg-white/10 hover:border-[#f2be2f] transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md"
                >
                  {showAllNews ? "Show Less News" : "Load More News"}
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#f2be2f] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0f141c 1px, transparent 1px), linear-gradient(90deg, #0f141c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal-up">
          <h2 className="text-5xl sm:text-7xl font-black text-[#0f141c] mb-8 tracking-tight">Stay Connected.</h2>
          <p className="text-xl text-[#0f141c]/70 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in our latest projects or want to discuss a new development?
            Reach out to our team today to learn more about what we do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 bg-[#0f141c] text-white rounded-2xl font-black text-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,20,28,0.3)] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
