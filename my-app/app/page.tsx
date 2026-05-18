"use client";

import { useState, useRef } from "react";
import {
  FaStar,
  FaClipboardCheck,
  FaThumbsUp,
  FaClock,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa6";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import Link from "next/link";
import { newsArticles } from "./news/data";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
    { title: "Residential Builds", description: "Custom homes, additions, and full remodels planned for comfort, durability, and long-term value.", icon: HouseIcon },
    { title: "Commercial Construction", description: "Office, retail, and mixed-use construction with schedule, cost, and quality controls.", icon: LayoutIcon },
    { title: "Structural Repair", description: "Foundations, framing, and critical repairs handled with a careful, code-focused approach.", icon: ToolsIcon },
    { title: "Civil & Site Development", description: "Site preparation, grading, drainage, and utility planning for build-ready land.", icon: ToolsIcon },
    { title: "Renovation & Remodeling", description: "Modernization of existing buildings with phased execution to reduce disruption.", icon: LayoutIcon },
    { title: "Waterproofing & Roofing", description: "Roof systems, moisture control, and weatherproof detailing for long-term durability.", icon: HouseIcon },
  ];

  const testimonials = [
    { name: "Robert Anderson", role: "CEO", company: "Anderson Property Group", projectType: "Commercial", rating: 5, quote: "Building Construction Co. delivered our 12-story office complex two weeks ahead of schedule. Their project management was exceptional.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
    { name: "William Harris", role: "Homeowner", company: "Private Residence", projectType: "Residential", rating: 5, quote: "They transformed our outdated 1970s ranch into a modern, energy-efficient home. The attention to detail exceeded our expectations.", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" },
    { name: "James Chen", role: "Facilities Director", company: "Lakeside Health", projectType: "Healthcare", rating: 5, quote: "Renovating an active medical facility requires precision. Their team maintained strict infection control protocols. Zero disruption.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" },
    { name: "Carlos Mendez", role: "Principal", company: "Green Valley Academy", projectType: "Education", rating: 5, quote: "They built our school campus with the students in mind. Natural lighting, acoustic insulation, and flexible classroom layouts — all delivered on budget.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80" },
    { name: "David Park", role: "Managing Partner", company: "Park Real Estate", projectType: "Mixed-Use", rating: 5, quote: "We hired them for a complex mixed-use tower. They coordinated over 40 subcontractors flawlessly. The lobby finishes set a new standard.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" },
    { name: "Mark Henderson", role: "Operations Manager", company: "Torres Industrial LLC", projectType: "Renovation", rating: 5, quote: "The warehouse conversion project was completed in 10 months with minimal disruption. They preserved the industrial character beautifully.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" },
    { name: "Michael Carter", role: "Director", company: "Urban Logistics", projectType: "Industrial", rating: 5, quote: "Their execution of our 200,000 sq ft distribution center was flawless. From site prep to MEP systems, absolute professionals.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
    { name: "Kevin Brody", role: "Owner", company: "The Grand Boutique", projectType: "Retail", rating: 5, quote: "The timeline was impossibly tight before the holiday season. Not only did they finish on time, but the custom millwork is stunning.", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" },
    { name: "Thomas Wright", role: "Chief Architect", company: "Wright & Co. Designs", projectType: "Consulting", rating: 5, quote: "Their pre-construction planning caught several critical structural conflicts that would have cost us millions. Unmatched expertise.", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80" },
    { name: "Alexander Scott", role: "Developer", company: "Oasis Developments", projectType: "Multi-Family", rating: 5, quote: "We've partnered with them on three separate 50-unit condo projects. Every single one was completed flawlessly and on budget.", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80" },
    { name: "Daniel Foster", role: "City Planner", company: "Metro Municipality", projectType: "Infrastructure", rating: 5, quote: "They handled the downtown plaza renovation perfectly, navigating complex city regulations and keeping the public safe throughout.", avatar: "https://images.unsplash.com/photo-1566492031525-33626e2e5e41?auto=format&fit=crop&w=200&q=80" },
    { name: "Jonathan Pierce", role: "Operations Dir.", company: "Pinnacle Tech", projectType: "Corporate", rating: 5, quote: "The build-out of our new 40,000 sq ft headquarters was executed beautifully. The acoustic treatments and integrations are perfect.", avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80" },
  ];

  const articles = newsArticles.slice(0, 3);

  const heroImage = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80";
  const aboutImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";

  return (
    <main id="home" className="flex-1 bg-[#0f141c]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-4">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#f2be2f]/5 blur-[180px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Trusted Construction Partner</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Reliable Spaces</span> <br />
                With Precision.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-12">
                We turn plans into durable, well-managed projects through clear communication, quality materials, and disciplined execution.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#f2be2f] px-8 text-sm font-black uppercase tracking-widest text-[#0f141c] transition-all hover:bg-[#e8aa00] hover:shadow-[0_10px_30px_rgba(242,190,47,0.3)] hover:-translate-y-1">
                  Get Started
                </Link>
                <Link href="/services" className="inline-flex h-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-[#f2be2f]/50 hover:-translate-y-1 backdrop-blur-md">
                  Our Services
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
                {[
                  ["120+", "Projects Completed"],
                  ["25 Yrs", "Combined Experience"],
                  ["98%", "Client Satisfaction"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="text-4xl font-mono tracking-tighter font-black text-[#f2be2f] mb-2">{value}</div>
                    <div className="text-[0.65rem] font-medium font-sans text-white/70 uppercase tracking-[0.25em]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] hidden lg:block reveal-up delay-1">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <img src={heroImage} alt="Construction" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-[#0f141c]/40 to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                {[["06", "Teams"], ["18", "Active Sites"], ["24/7", "Support"]].map(([value, label]) => (
                  <div key={label} className="bg-[#1a2330]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
                    <div className="text-3xl font-mono tracking-tighter font-black text-[#f2be2f]">{value}</div>
                    <div className="mt-2 text-[0.6rem] font-medium font-sans text-white/80 uppercase tracking-[0.25em]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="reveal-up">
              <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight">Welcome To Construction Real Solution.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                We plan, manage, and deliver builds with an emphasis on quality control, schedule discipline, and clean handoff at every stage.
              </p>

              <div className="space-y-6">
                {[
                  "Detailed planning from concept through completion.",
                  "Transparent communication for owners and designers.",
                  "On-site checks that keep the project perfectly aligned.",
                  "A team that handles residential and commercial work.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-5 rounded-2xl bg-[#1a2330] border border-white/5 hover:border-[#f2be2f]/30 transition-all">
                    <span className="w-8 h-8 rounded-full bg-[#f2be2f] flex items-center justify-center text-[#0f141c] shrink-0 font-black text-sm shadow-[0_0_15px_rgba(242,190,47,0.5)]">✓</span>
                    <span className="text-sm font-semibold text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="mt-12 inline-flex h-14 items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-[#f2be2f]/50 transition-all hover:-translate-y-1">
                Read More About Us <FaArrowRight />
              </Link>
            </div>

            <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] reveal-up delay-1">
              <img src={aboutImage} alt="Construction" className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#1a2330]/30 relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Services</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">We Provide Solutions.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-up">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#1a2330] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#f2be2f]/40">
                  <div className="absolute right-0 top-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-[#f2be2f]/20 blur-2xl transition-transform duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f141c] text-[#f2be2f] border border-white/5 group-hover:bg-[#f2be2f] group-hover:text-[#0f141c] transition-colors duration-500">
                    <Icon />
                  </div>
                  <h3 className="relative z-10 mt-8 text-2xl font-black tracking-tight text-white group-hover:text-[#f2be2f] transition-colors">{service.title}</h3>
                  <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/60">{service.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center reveal-up">
            <Link href="/services" className="inline-flex h-14 items-center rounded-2xl bg-[#f2be2f] px-10 text-sm font-black uppercase tracking-widest text-[#0f141c] shadow-[0_10px_30px_rgba(242,190,47,0.3)] hover:bg-[#e8aa00] transition-all hover:-translate-y-1">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#f2be2f]/5 blur-[200px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 reveal-up">
            <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">What Our Clients Say</h2>
          </div>
        </div>

        <div className="relative flex overflow-hidden group pb-8">
          <style>{`
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-left {
              animation: scroll-left 50s linear infinite;
            }
          `}</style>

          <div className="flex w-max animate-scroll-left mask-edges hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div key={index} className="flex-none w-[85vw] sm:w-[420px] pr-6">
                <div className="flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-[#1a2330] p-10 hover:border-[#f2be2f]/30 transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-default">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} className="text-[#f2be2f] text-lg" />
                      ))}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-[0.65rem] font-bold uppercase tracking-widest text-white/50 border border-white/5 whitespace-nowrap">
                      {t.projectType}
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-10 flex-1 text-lg">"{t.quote}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#f2be2f]" />
                    <div>
                      <div className="font-black text-white text-base">{t.name}</div>
                      <div className="text-[0.7rem] uppercase tracking-widest text-white/40 mt-1">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-24 bg-[#1a2330]/30 relative overflow-hidden border-t border-white/5">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 reveal-up">
            <div>
              <p className="text-[#f2be2f] text-xs font-bold uppercase tracking-[0.3em] mb-4">Insights</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">Latest News</h2>
            </div>
            <Link href="/news" className="inline-flex h-14 items-center rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-[#f2be2f]/50 transition-all hover:-translate-y-1">
              All Articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 stagger-up">
            {articles.map((article) => (
              <Link href={`/news/${article.slug}`} key={article.title} className="group rounded-[2.5rem] border border-white/5 bg-[#1a2330] overflow-hidden hover:border-[#f2be2f]/40 transition-colors flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330] to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-[0.6rem] font-bold text-white uppercase tracking-widest">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[0.65rem] font-bold text-white/40 uppercase tracking-widest mb-4">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#f2be2f]"></span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-[#f2be2f] transition-colors">{article.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">{article.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center text-sm font-bold text-white group-hover:text-[#f2be2f]">
                    Read Article <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <path d="M4 11.5 12 5l8 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 10.5V19h11V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <path d="M4 5.5h16v13H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.5 5.5v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
      <path d="M14 5.5a4 4 0 0 0-3.7 5.5L5.5 16l2.5 2.5 1.2-1.2L10.9 19l1.8-1.8-1.8-1.8 1.7-1.7A4 4 0 1 0 14 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17.5 6.5 20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
