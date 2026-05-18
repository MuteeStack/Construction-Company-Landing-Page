"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { FaArrowRight } from "react-icons/fa";

const coreServices = [
  {
    title: "Residential Builds",
    description: "Custom homes, additions, and full remodels planned for comfort, durability, and long-term value.",
    icon: HouseIcon,
  },
  {
    title: "Interior Design",
    description: "Clean layouts, modern finishes, and practical material choices for livable spaces that feel finished.",
    icon: LayoutIcon,
  },
  {
    title: "Structural Repair",
    description: "Foundations, framing, and critical repairs handled with a careful, code-focused approach.",
    icon: ToolsIcon,
  },
  {
    title: "Commercial Construction",
    description: "Office, retail, and mixed-use construction with schedule, cost, and quality controls.",
    icon: HouseIcon,
  },
  {
    title: "Renovation & Remodeling",
    description: "Modernization of existing buildings with phased execution to reduce disruption.",
    icon: LayoutIcon,
  },
  {
    title: "Civil & Site Development",
    description: "Site preparation, grading, drainage, and utility planning for build-ready land.",
    icon: ToolsIcon,
  },
  {
    title: "MEP Installation",
    description: "Mechanical, electrical, and plumbing systems integrated to code and performance requirements.",
    icon: ToolsIcon,
  },
  {
    title: "Waterproofing & Roofing",
    description: "Roof systems, moisture control, and weatherproof detailing for long-term durability.",
    icon: HouseIcon,
  },
  {
    title: "Painting & Finishing",
    description: "Interior and exterior finishing work for polished delivery and occupancy readiness.",
    icon: LayoutIcon,
  },
  {
    title: "Pre-Construction Planning",
    description: "Estimating, sequencing, and procurement strategies to prevent delays and budget overruns.",
    icon: HouseIcon,
  },
  {
    title: "Maintenance & Support",
    description: "Long-term service contracts and repair support to keep your investment in prime condition.",
    icon: ToolsIcon,
  },
  {
    title: "Safety & Compliance",
    description: "Rigorous site safety management and regulatory compliance for every project phase.",
    icon: LayoutIcon,
  },
];

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

export default function ServicesPage() {
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <main className="min-h-screen bg-[#0f141c]">
      <SiteHeader />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#f2be2f]/5 blur-[150px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-900/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl reveal-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#f2be2f] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Capabilities</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Expertise In Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2be2f] to-[#e8aa00]">Discipline.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Our team supports every project phase including planning, core construction, MEP systems, finishing, and long-term maintenance with an absolute focus on quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div id="services-grid" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="stagger-up grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(showAllServices ? coreServices : coreServices.slice(0, 6)).map((item, i) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#1a2330] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#f2be2f]/40"
                style={{ animationDelay: `${(i % 6) * 100}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute right-0 top-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-gradient-to-br from-[#f2be2f]/20 to-transparent blur-2xl transition-transform duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100" />

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f141c] text-[#f2be2f] border border-white/5 group-hover:bg-[#f2be2f] group-hover:text-[#0f141c] transition-colors duration-500">
                  <Icon />
                </div>

                <h2 className="relative z-10 mt-8 text-2xl font-black tracking-tight text-white group-hover:text-[#f2be2f] transition-colors">{item.title}</h2>
                <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/60">{item.description}</p>

                <Link href="/contact" className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-[#f2be2f]/30 transition-colors">
                  <span className="text-sm font-bold text-white group-hover:text-[#f2be2f] transition-colors">Start Project</span>
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#f2be2f] group-hover:border-[#f2be2f] group-hover:text-[#0f141c] transition-all duration-300">
                    <FaArrowRight className="text-xs" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center reveal-up">
          <button
            onClick={() => {
              if (showAllServices) {
                const element = document.getElementById("services-grid");
                if (element) {
                  const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }
              setShowAllServices(!showAllServices);
            }}
            className="inline-flex h-14 items-center rounded-2xl bg-white/5 border border-white/10 px-8 text-sm font-bold text-white hover:bg-white/10 hover:border-[#f2be2f] transition-all hover:-translate-y-1 shadow-lg backdrop-blur-md"
          >
            {showAllServices ? "Show Less Services" : "View All Capabilities"}
          </button>
        </div>
      </div>

      {/* Sectors Section */}
      <section className="mt-10 border-t border-white/5 bg-[#0f141c] py-24 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#f2be2f]">Project Sectors</p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Specialized Construction Across Sectors</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/60">We execute complex projects across diverse environments, ensuring sector-specific compliance and unmatched performance standards.</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Residential Communities",
                  "Corporate Offices",
                  "Retail & Hospitality",
                  "Industrial Facilities",
                  "Healthcare & Education",
                  "Public Infrastructure",
                ].map((sector) => (
                  <div key={sector} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1a2330]/50 backdrop-blur-md px-6 py-5 text-sm font-bold text-white hover:border-[#f2be2f]/50 hover:bg-[#1a2330] transition-colors">
                    <span className="h-2 w-2 rounded-full bg-[#f2be2f] shadow-[0_0_10px_rgba(242,190,47,0.8)]" />
                    {sector}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up delay-1 rounded-[3rem] border border-[#f2be2f]/20 bg-gradient-to-b from-[#1a2330] to-[#0f141c] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:p-14 relative overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#f2be2f]/10 blur-[80px]" />

              <h3 className="relative z-10 text-3xl font-black text-white">Ready to Start?</h3>
              <p className="relative z-10 mt-6 text-lg text-white/60 leading-relaxed max-w-md mx-auto">Contact our engineering team today to discuss your project requirements and receive a detailed feasibility study.</p>
              <Link href="/contact" className="relative z-10 mt-10 group flex items-center justify-between rounded-2xl bg-[#f2be2f] px-8 py-5 text-base font-black text-[#0f141c] shadow-[0_10px_30px_rgba(242,190,47,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(242,190,47,0.4)]">
                <span>Start Your Construction Project</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
