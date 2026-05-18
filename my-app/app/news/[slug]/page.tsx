import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { newsArticles } from "../data";

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    "Company Update": "bg-blue-500/10 text-blue-300 border-blue-500/20",
    "Industry Insight": "bg-purple-500/10 text-purple-300 border-purple-500/20",
    "Awards & Recognition": "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    Culture: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  };
  return colors[category] || "bg-white/10 text-white/80 border-white/20";
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background image & gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-[#0f141c]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f141c] via-[#0f141c]/50 to-transparent" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#f2be2f]/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className={`w-2 h-2 rounded-full bg-[#f2be2f]`} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">{article.category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-white/50">
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2be2f]" />
            <span className="text-[#f2be2f]">{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 z-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* Main Article */}
          <article className="reveal-up bg-[#1a2330] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            {/* Author Profile */}
            <div className="flex items-center gap-5 pb-12 mb-12 border-b border-white/10">
              <img
                src={article.authorImage}
                alt={article.author}
                className="h-16 w-16 rounded-2xl object-cover grayscale border border-white/10"
              />
              <div>
                <div className="font-black text-lg text-white group-hover:text-[#f2be2f] transition-colors">
                  {article.author}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-1">
                  {article.authorRole}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-white/80 font-medium">
                {article.excerpt}
              </p>

              {article.content.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-black text-white mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-white/60">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <Link
                href="/news"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#f2be2f] transition-colors hover:text-white"
              >
                <span className="w-10 h-10 rounded-full border border-[#f2be2f] group-hover:border-white flex items-center justify-center transition-colors">
                  ←
                </span>
                Back to News
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 reveal-up" style={{ animationDelay: "200ms" }}>
            {/* Related Articles */}
            <div className="bg-[#1a2330] border border-white/5 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8 pb-4 border-b border-white/5">
                Related Articles
              </h3>
              <div className="space-y-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className="group block"
                  >
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#f2be2f] mb-2 block">
                      {related.category}
                    </span>
                    <h4 className="text-lg font-bold leading-snug text-white group-hover:text-[#f2be2f] transition-colors">
                      {related.title}
                    </h4>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                      {related.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#f2be2f] to-[#e8aa00] rounded-3xl p-8 text-[#0f141c] shadow-[0_20px_40px_rgba(242,190,47,0.2)]">
              <h3 className="text-2xl font-black mb-4">
                Discuss Your Next Project
              </h3>
              <p className="text-sm font-medium mb-8 leading-relaxed opacity-80">
                Ready to build something extraordinary? Connect with our team of experts today.
              </p>
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-xl bg-[#0f141c] px-6 text-sm font-black text-white transition-transform hover:-translate-y-1 shadow-lg"
              >
                Contact Us Now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
